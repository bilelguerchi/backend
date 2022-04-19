const mongoose = require('mongoose');

const connectDatabase = () => {

    mongoose.connect(process.env.DB_LOCAL_URI,{

        //useNweUrlparser:true,
        //useUnifiedTopology:true,
        //useCreateIndex:true
    }).then(con =>{

   console.log(`mongoDB database conncted with HOST: ${con.connection.host}`)

    })



}

module.exports = connectDatabase