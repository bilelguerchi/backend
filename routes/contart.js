const express = require('express');
const mongoose = require("mongoose");

const router = express.Router();





const {getcontrats,newcontrat,getSinglecontrat ,updatecontrat,deletecontrat}= require('../controllers/contratController');






router.route('/contrats').get(getcontrats);
router.route('/contrat/:id').get(getSinglecontrat );
router.route('/contrat/new').post(newcontrat);
router.route('/contrat/:id').put(updatecontrat); 
 router.route('/contrat/:id').delete(deletecontrat); 




module.exports= router ;