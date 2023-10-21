const mongoose = require('mongoose');
connectToMongo().catch(err => console.log(err));

async function connectToMongo() {
  await mongoose.connect('mongodb://localhost:27017/note');
  console.log("Successsfully Connected to mongodb. ")
}

module.exports=connectToMongo;