const express = require('express');
const mongoose = require('mongoose');

const router = express.Router();





const {getProducts,newproduct,getSingleproduct ,updateproduct,deleteproduct}= require('../controllers/productController');






router.route('/products').get(getProducts);
router.route('/product/:id').get(getSingleproduct );
router.route('/product/new').post(newproduct);
router.route('/product/:id').put(updateproduct); 
 router.route('/product/:id').delete(deleteproduct); 




module.exports= router ;