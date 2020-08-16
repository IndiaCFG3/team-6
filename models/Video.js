const mongoose = require("mongoose");
const videoSchema = mongoose.Schema({
    video: {
        type: String,
        required: true,
      },
  c_id: {
    type: String,
    required: true,
    
  },
  
  
});
module.exports = mongoose.model("videos", videoSchema);
