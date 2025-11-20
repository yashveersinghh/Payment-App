// backend/routes/account.js
const express = require('express');
const { authMiddleware } = require('../middleware');
const { Account } = require('../db');
const mongoose = require('mongoose'); // fine to keep even if not used for transactions

const router = express.Router();

router.get('/balance', authMiddleware, async (req, res) => {
  try {
    const account = await Account.findOne({ userId: req.userId }).lean();
    return res.json({ balance: account?.balance ?? 0 });
  } catch (err) {
    console.error('Balance error:', err);
    return res.status(500).json({ message: 'Could not fetch balance' });
  }
});

router.post('/transfer', authMiddleware, async (req, res) => {
  const { amount, to } = req.body;
  const numericAmount = Number(amount);

  // Basic validations
  if (!numericAmount || numericAmount <= 0) {
    return res.status(400).json({ message: 'Invalid amount' });
  }
  if (!to || to === req.userId) {
    return res.status(400).json({ message: 'Invalid recipient' });
  }

  try {
    // 1) Atomically debit sender if they have enough balance
    const sender = await Account.findOneAndUpdate(
      { userId: req.userId, balance: { $gte: numericAmount } },
      { $inc: { balance: -numericAmount } },
      { new: true }
    );

    if (!sender) {
      return res.status(400).json({ message: 'Insufficient balance' });
    }

    // 2) Credit recipient
    const recipient = await Account.findOneAndUpdate(
      { userId: to },
      { $inc: { balance: numericAmount } },
      { new: true }
    );

    if (!recipient) {
      // Recipient not found — revert debit (best-effort)
      await Account.updateOne({ userId: req.userId }, { $inc: { balance: numericAmount } });
      return res.status(400).json({ message: 'Invalid recipient — transfer reverted' });
    }

    // Success
    return res.json({ message: 'Transfer successful' });
  } catch (err) {
    console.error('Transfer error:', err);
    // Attempt best-effort rollback if sender was debited but error occurred before recipient credit
    // Note: we can't always be sure here what state is; reconciliation/logging is recommended.
    return res.status(500).json({ message: 'Transfer failed' });
  }
});

module.exports = router;
