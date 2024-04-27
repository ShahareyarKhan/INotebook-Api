const mongoose = require('mongoose');
connectToMongo().catch(err => console.log(err));

async function connectToMongo() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log("Successsfully Connected to mongodb. ")
}

module.exports = connectToMongo;