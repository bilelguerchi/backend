
const contrats= require('../models/contrat');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures =require('../utils/apifeatures');



//************ create new contrat ==>/api/v1/contrat/new************//
exports.newcontrat =catchAsyncErrors (async(req,res,next) => {
  const contrat = await contrats.create(req.body);
res.status(201).json({
    success: true,
    contrat
})
})
//************get all contrats => /api/v1/contrats************//

exports.getcontrats = catchAsyncErrors (async (req,res,next) => {
  const apifeatures = req.params.new
  try {
          const contrat = await contrats.find();
          res.status(200).json(contrat)
      }catch (err){
  res.status(700).json(err);
  }
  })




// ************/get single contrat detalis/ ************// 
 //api/v1/contrats/:id
 exports.getSinglecontrat = catchAsyncErrors (async (req,res,next) => {
  try {
    const contrat = await contrats.findById(req.params.id);
    res.status(200).json(contrat);
  } catch (err) {
    res.status(500).json(err);
  }
});








//************//update contrat //************//
// /api/admin/v1/contrats/:id
exports.updatecontrat = catchAsyncErrors ( async (req, res,next) => {
  try {
  const updatecontrat = await contrats.findByIdAndUpdate(req.params.id,{
  $set: req.body,
  },{new:true});
  res.status(200).json(updatecontrat);
  }catch (err) {
  res.status(501).json(err);
  }
  });
   
 
 



////************//delete contrat //************//
                //api/v1/contrats/:id
exports.deletecontrat = catchAsyncErrors (async (req,res,next) => {
const contrat  = await contrats.findById(req.params.id);
if (!contrat){
return next (new ErrorHandler('contrat not found',404));
    }
await contrat.remove();
res.status(200).json({
success: true,
message : 'contrat is deleted .'
})
})