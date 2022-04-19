//import mongoose
const bcrypt = require('bcryptjs/dist/bcrypt');
const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const validator = require ('validator');

//generate schema
const userSchema =  new mongoose.Schema({
  name:{
        type:String,
        required:[true,'remplir ']
    },

    lastname :{
        type:String,
        required:[true,'remplir ']
    },

    email :{
        type:String,
        required:[true,'remplir '],
        unique : true,
        validate :[validator.isEmail,'please entre valid email address']
        

},
    password :{
        type:String,
        required:[true,'remplir '],
        minlength :[8, 'your phone number must be longer then 8 characters'],
        select : false,
    },

    tel :{
        type:String,
        required:[true,'remplir '],
        minlength :[8,'your phone number must be longer then 8 characters']
    },

    role : {
        type:String,
    required:[true,'remplir '],
       default:'user'},

   
   });
  resetpasswordToken:String;
  resetpasswordExpire:Date


//cryptage de mot de passe
userSchema.pre('save', async function(next){
    if (!this.isModified('password'))
   {
       next()
               }
     this.password= await bcrypt.hash(this.password,10)
})
//compare user password 
userSchema.methods.comparepassword =  async function (enteredpassword) {
    return  await  bcrypt.compare(enteredpassword,this.password)
}




//return jwt token
userSchema.methods.getJwtToken =   async function() {
    return  await jwt.sign({id:this._id}, process.env.JWT_SECRET,{
    expiresIn: process.env.JWT_EXPIRES_TIME
})

}


//Export model
module.exports =  mongoose.model('user',userSchema) ;