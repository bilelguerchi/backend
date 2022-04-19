
const products= require('../models/product');
const ErrorHandler = require('../utils/errorHandler');
const catchAsyncErrors = require('../middlewares/catchAsyncErrors');
const APIFeatures =require('../utils/apifeatures');



//************ create new product ==>/api/v1/product/new************//
exports.newproduct =catchAsyncErrors (async(req,res,next) => {
  const product = await products.create(req.body);
res.status(201).json({
    success: true,
    product
})

})
//************get all products => /api/v1/products************//
exports.getProducts = catchAsyncErrors (async (req,res,next) => {
const apifeatures = req.params.new
try {
        const product = await products.find();
        res.status(200).json(product)
    }catch (err){
res.status(700).json(err);
}
})
//************/m5edmtech/************//
//get all products => /api/v1/products
//exports.getProducts = catchAsyncErrors (async (req,res,next) => {
//const apifeatures = new APIFeatures(product.find(),req.query).search()
// const product = await apifeatures.query;
// res.status(200).json({
//   success:true,
//  count: product.length,
//   product
//})
//})


// ************/get single product detalis/ ************// 
 //api/v1/products/:id
exports.getSingleproduct = catchAsyncErrors (async (req,res,next) => {
    try {
      const product = await products.findById(req.params.id);
      res.status(200).json(product);
    } catch (err) {
      res.status(500).json(err);
    }
  });








//************//m5edmtech//************//
// get single product detalis =>  /api/v1/products/:id
//m 5edmtech
//exports.getSingleproduct  = catchAsyncErrors (async (req,res,next) => {
//  const product = await products.findById(req.parms.id)
// if (!product){
// return next (new ErrorHandler('product not found',404));
//}
//res.status(200).json({
//success: true,
//product
//})
//})

//************//update product //************//
// /api/admin/v1/products/:id
exports.updateproduct = catchAsyncErrors ( async (req, res,next) => {
try {
const updateproduct = await products.findByIdAndUpdate(req.params.id,{
$set: req.body,
},{new:true});
res.status(200).json(updateproduct);
}catch (err) {
res.status(501).json(err);
}
});
 
 

//************//mta5demtch//************//  
// update product    => /api/admin/v1/products/:id
//5edmtech 
//exports.updateproduct = catchAsyncErrors (async (req,res,next) =>{
// let product = await product.findById(req.params.id);
// if (!product) {
//   return next (new ErrorHandler('product not found',404));
//   }
//  product = await product.findByIdAndUpdate(req.params.id,req.body,{
//    new :true, 
//   runvalidators : true,
//   usefindAndModify:false 
// });
// res.send(200).json({
//  success : true,
//  product
//  })
//})

////************//delete product //************//
                //api/v1/products/:id
exports.deleteproduct = catchAsyncErrors (async (req,res,next) => {
    const product  = await products.findById(req.params.id);
    if (!product){
        return next (new ErrorHandler('product not found',404));
    }

    await product.remove();

    res.status(200).json({
        success: true,
        message : 'product is deleted .'


    })

})