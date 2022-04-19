const mongoose =require ('mongoose');
const Schema = mongoose.Schema; 
var projetschema= new Schema ({

    ref :{type : String,
        required:[true,'please remplir ']},


    date_deb :{type : String,
        required:[true,'please remplir  ']},

    date_fin :{type : String,
        required:[true,'please remplir  ']},

    idcontart :{type : String,
        required:[true,'please remplir ']},

    client :{type : String,
        required:[true,'please remplir  ']},
        
    detail :{type : String,
        required:[true,'please remplir ']},
});


module.exports =  mongoose.model('projet',projetschema) ;