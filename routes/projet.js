const express = require("express");
const mongoose = require("mongoose");

const router = express.Router();





const {getprojets,newprojet,getSingleprojet ,updateprojet,deleteprojet}= require('../controllers/projetController');






router.route('/projets').get(getprojets);
router.route('/projet/:id').get(getSingleprojet );
router.route('/projet/new').post(newprojet);
router.route('/projet/:id').put(updateprojet); 
 router.route('/projet/:id').delete(deleteprojet); 




module.exports= router ;