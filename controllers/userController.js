
const users = require('../models/user');
const ErrorHandler =require('../utils/errorHandler');
const catchAsyncErrors = require ('../middlewares/catchAsyncErrors');
const bcrypt = require('bcryptjs/dist/bcrypt');





//************ create newuser ==>/api/v1/user/new************//
exports.newuser =catchAsyncErrors (async(req,res,next) => {
    const user = await users.create(req.body);
  res.status(201).json({
      success: true,
     user
  })
})


//************get all users => /api/v1/users************//
exports.getusers = catchAsyncErrors (async (req,res,next) => {
    const apifeatures = req.params.new
    try {
            const user = await users.find();
            res.status(200).json(user)
        }catch (err){
    res.status(700).json(err);
    }
    })
// ************/get single user detalis/ ************// 
 //api/v1/user/:id
exports.getSingleuser = catchAsyncErrors (async (req,res,next) => {
    try {
      const user = await users.findById(req.params.id);
      res.status(200).json(user);
    } catch (err) {
      res.status(500).json(err);
    }
  });

  /*delete user */
  exports.deleteuser = catchAsyncErrors (async (req,res,next) => {
    const user  = await users.findById(req.params.id);
    if (!user){
        return next (new ErrorHandler('user not found',404));
    }
await user.remove();
res.status(200).json({
success: true,
message : 'user is deleted .'
})
})
//****************/register/****************//
exports.registeruser = catchAsyncErrors (async ( req, res,next) =>{
const {name, lastname , email, password, tel , role } = req.body;
const users = await user.create({
name,  
lastname,
email , 
password ,
tel,
role
})

const token = users.getJwtToken();
res.status(201).json({
    success : true,
    token
   
})

})
//***************/login /*****************/
           //user  => /a[i/v1/login]

exports.loginuser = catchAsyncErrors(async(req,res,next)=>{
    const{email,password}=req.body;

// checks if email and password is entered by user
if(!email|| !password){
    return next (new ErrorHandler('please entre email & password',400))
}

// finding user in database
const verifuser = await users.findOne({email})

if (!verifuser){
    return next (new ErrorHandler('invalid Email or password',401));
}
// bcrypt.
 const verifpass = await bcrypt.compare(password,verifuser.password)

 if(!verifpass){
     return  next ( new ErrorHandler('invalid password',403));
 }
const token = user.getJwtToken()
return res.send({status:'ok',token :token})
})