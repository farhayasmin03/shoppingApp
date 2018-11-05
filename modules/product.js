var mongoose = require('mongoose');
var schema = new mongoose.Schema({
    image: {
        type: String,
        unique: true,
        required: true,
        
      },
      title: {
        type: String,
        unique: true,
        required: true,
        trim: true
      },
      description: {
        type: String,
        required: true,
      },
      price:{
          type:Number,
          required: true,

      }
});
var Product = mongoose.model('User', schema);
module.exports =Product ;
