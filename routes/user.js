const express = require('express');


const router = express.Router();




const {registeruser,loginuser,getusers,newuser,deleteuser} = require('../controllers/userController');






router.route('/users').get(getusers)
router.route('/user/new').post(newuser);
router.route('/user/:id').delete(deleteuser); 
router.route('/register').post(registeruser);
router.route('/login').post(loginuser);


module.exports= router ;