
const mongoose = require('mongoose');


const productschema = new mongoose.Schema({

    ref :{type:String,
        required:[true,'please remplir  ']
      },
  
     nom: { type:String,
  
     required:[true,'please remplir ']
    },
  
})

module.exports = mongoose.model('product', productschema )