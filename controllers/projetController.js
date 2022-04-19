
const projets = require('../models/projet')
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures =require('../utils/apifeatures');



//************ create newprojet ==>/api/v1/projet/new************//
exports.newprojet =catchAsyncErrors (async(req,res,next) => {
  const projet = await projets.create(req.body);
res.status(201).json({
    success: true,
   projet
})

})
//************get allprojets => /api/v1/projet************//
exports.getprojets = catchAsyncErrors (async (req,res,next) => {
const apifeatures = req.params.new
try {
        const projet = await projets.find();
        res.status(200).json(projet)
    }catch (err){
res.status(700).json(err);
}
})



// ************/get singleprojet detalis/ ************// 
 //api/v1/projet/:id
exports.getSingleprojet = catchAsyncErrors (async (req,res,next) => {
    try {
      const projet = await projets.findById(req.params.id);
      res.status(200).json(projet);
    } catch (err) {
      res.status(500).json(err);
    }
  });








//************//updateprojet //************//
// /api/admin/v1/projet/:id
exports.updateprojet = catchAsyncErrors ( async (req, res,next) => {
try {
const updateprojet= await projets.findByIdAndUpdate(req.params.id,{
$set: req.body,
},{new:true});
res.status(200).json(updateprojet);
}catch (err) {
res.status(501).json(err);
}
});
 
 



////************//delete projet //************//
                //api/v1/projet/:id
exports.deleteprojet = catchAsyncErrors (async (req,res,next) => {
    const projet  = await projets.findById(req.params.id);
    if (!projet){
        return next (new ErrorHandler('projet not found',404));
    }

    await projet.remove();

    res.status(200).json({
        success: true,
        message : 'projet is deleted .'


    })

})