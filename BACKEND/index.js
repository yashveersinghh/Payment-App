const express = require('express');
const cors = require('cors');
require('dotenv').config();
const mongoose = require('mongoose');
const mainRouter = require('./routes/index');

const app = express();

const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI || process.env.MONGO_URL || process.env.DATABASE_URL;
const FRONTEND_URL = process.env.FRONTEND_URL || '*';

if (!MONGO_URI) {
  console.error('MongoDB connection string not found in environment variables');
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

app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server listening on port ${PORT}`);
});