require('dotenv').config();
const connectToMongo = require('./db');
const express = require('express');
const app = express();
const port = 5000;
const cors = require('cors');

// Connect to MongoDB
connectToMongo();

// Configure CORS
app.use(cors({
  origin: [
    'http://localhost:3000',
    'https://inotebook-shahareyar.vercel.app'
  ],
  credentials: true, // Enable credentials if needed
}));

// app.use(cors());

// Middleware to parse JSON requests
app.use(express.json());

// Basic route
app.get('/', (req, res) => {
  res.send('Hello World');
});

// API routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/notes', require('./routes/notes'));

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
