const patterns= require('../models/pattern');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures =require('../utils/apifeatures');



//************ create new pattern ==>/api/v1/pattern/new************//
exports.newpattern =catchAsyncErrors (async(req,res,next) => {
  const pattern = await patterns.create(req.body);
res.status(201).json({
    success: true,
    pattern
})

})
//************get all patterns => /api/v1/patterns************//
exports.getpatterns = catchAsyncErrors (async (req,res,next) => {
const apifeatures = req.params.new
try {
        const pattern = await patterns.find();
        res.status(200).json(pattern)
    }catch (err){
res.status(700).json(err);
}
})




// ************/get single pattern detalis/ ************// 
 //api/v1/patterns/:id
exports.getSinglepattern = catchAsyncErrors (async (req,res,next) => {
    try {
      const pattern = await patterns.findById(req.params.id);
      res.status(200).json(pattern);
    } catch (err) {
      res.status(500).json(err);
    }
  });









//************//update pattern //************//
// /api/admin/v1/patterns/:id
exports.updatepattern = catchAsyncErrors ( async (req, res,next) => {
try {
const updatepattern = await patterns.findByIdAndUpdate(req.params.id,{
$set: req.body,
},{new:true});
res.status(200).json(updatepattern);
}catch (err) {
res.status(501).json(err);
}
});
 
 



////************//delete pattern //************//
                //api/v1/patterns/:id
exports.deletepattern = catchAsyncErrors (async (req,res,next) => {
    const pattern  = await patterns.findById(req.params.id);
    if (!pattern){
        return next (new ErrorHandler('pattern not found',404));
    }

    await pattern.remove();

    res.status(200).json({
        success: true,
        message : 'pattern is deleted .'


    })

})