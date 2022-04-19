const app = require ('./app');
const connectDatabase = require('./config/database');


const dotenv = require('dotenv');

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
   next();
  });
// handle uncaugth exception
process.on('uncaughtException',err => {
    console.log(`ERROR :${err.message}`);
    console.log('sHutting down server due to uncaugth exception');
    process.exit(1)
})


//setting config file
dotenv.config({path:'backend/config/config.env'})


// connect to databse
connectDatabase();


const server = app.listen( process.env.PORT, () => {
    console.log(`server started on port : ${process.env.PORT} in ${process.env.NODE_ENV} mode.`)
})

//handle unhandled promise rejections ( err de systeme/server/ connection base de donnee)
process.on('unhandledRejection',err=>{
console.log(`ERROR:${err.message}`);
console.log('shutting down the server due to nhandled promise Rejection');
server.close(() => {
    process.exit(1)
    })

})
