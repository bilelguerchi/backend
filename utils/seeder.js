const product =require('../models/product');
const dotenv = require('dotenv');
const connectDatabase = require('../config/database');






const products = require('../data/product.json')
const { connect } = require('mongoose');


// settin dotenv file
dotenv.config({path :'backend/config/config.env'})

//connection base de donnnee
connectDatabase();


const seedproducts = async () =>{

    try {
        await product.deleteMany();
        console.log('products are deleted');
        
        await product.insertMany(products)
        console.log('all products are added')
        process.exit();

    }catch(error){
        console.log(error.message)
        process.exit();
    }
}


seedproducts();