const mongoose = require('mongoose');
const {Schema}=mongoose;

const NotesSchema = new Schema({
  user:{
    type: String,
    ref:'user'
  },
  title:{
    type : String,
    required : true
  },
  description:{
    type : String,
    required : true
  },
  
  date:{
    type : Date,
    default: Date.now
  }
});

const Notes = mongoose.model('notes',NotesSchema);
module.exports=Notes;