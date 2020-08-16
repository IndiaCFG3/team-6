const mongoose = require("mongoose");
const courseSchema = mongoose.Schema({
  c_name: {
    type: String,
    required: true,
  },
  c_id: {
    type: String,
    required: true,
    unique: true,
  },
  description: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
 
//   videos:{
//       type:Array,

//   },
  date: {
    type: Date,
    default: Date.now,
  },
});
module.exports = mongoose.model("course",courseSchema);
