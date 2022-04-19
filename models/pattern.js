//import mongoose
const mongoose = require('mongoose');




//generate schema
const patternSchema = mongoose.Schema({
    nom: {type:String,
    required:[true,' please remplir ']},

    date :{type: String,
    required:[true,'please remplir ']},

    description:{type: String,
    required:[true,'please remplir  ']},

   
   

});





//Export model
module.exports = mongoose.model('pattern', patternSchema ) ; ;