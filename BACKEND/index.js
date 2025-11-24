const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const mainRouter = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 3000;

// Debug: Log all environment variables
console.log('=== Environment Variables Debug ===');
console.log('All env vars:', Object.keys(process.env).filter(key => key.includes('MONGO') || key.includes('mongo')));
console.log('MONGO_URI:', process.env.MONGO_URI);
console.log('MONGO_URL:', process.env.MONGO_URL);
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('===================================');

const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URL || process.env.DATABASE_URL;
const FRONTEND_URL = process.env.FRONTEND_URL || '*';

if (!MONGO_URI) {
  console.error('No MongoDB connection string found in environment variables');
  console.error('Checked: MONGO_URI, MONGO_URL, DATABASE_URL');
  process.exit(1);
}

mongoose.connect(MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => {
    console.error('Mongo connection error', err);
    process.exit(1);
});

app.use(cors({
    origin: FRONTEND_URL,
    credentials: true,
}));

app.use(express.json());

app.use('/api/v1', mainRouter)

app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});