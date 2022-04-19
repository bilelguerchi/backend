const express = require('express');
const mongoose = require("mongoose");

const router = express.Router();





const {getpatterns,newpattern,getSinglepattern ,updatepattern,deletepattern}= require('../controllers/patternController');






router.route('/patterns').get(getpatterns);
router.route('/pattern/:id').get(getSinglepattern );
router.route('/admin/pattern/new').post(newpattern);
router.route('/admin/pattern/:id').put(updatepattern); 
 router.route('/admin/pattern/:id').delete(deletepattern); 




module.exports= router ;