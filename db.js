const mongoose = require('mongoose');
require('dotenv').config(); // Load .env variables

async function connectToMongo() {
  try {
    const mongoUrl = process.env.MONGO_URL;
    if (!mongoUrl) throw new Error("MONGO_URL is not set in the environment.");
    
    console.log(`Connecting to MongoDB at: ${mongoUrl}`);
    await mongoose.connect(mongoUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Successfully connected to MongoDB.");
  } catch (err) {
    console.error("Failed to connect to MongoDB:", err.message);
    process.exit(1);
  }
}

module.exports = connectToMongo;
