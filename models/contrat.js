//import mongoose
const mongoose = require('mongoose');
//generate schema
const contratSchema = mongoose.Schema({
    
  idcontrat: {
      type:String,
    required:[true,'please remplir  ']
  },

    ref :{
      type:String,
      required:[true,'please remplir  ']
    },

   nom:{ type:String,

   required:[true,'please remplir ']
  },


  refprojet : {type:String,

  required:[true,'please remplir  ']
},


    typec :{
      type:String,
      required:[true,'please remplir  ']
  },


   datedeb:{ type:String,
    required:[true,'please remplir  ']
  },

   
   datefin:{ type:String,

   required:[true,'please remplir  ']
  },
   });





//Export model
module.exports = mongoose.model('contrat',contratSchema) ;