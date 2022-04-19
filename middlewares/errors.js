const res = require('express/lib/response');
const ErrorHandler = require('../utils/errorHandler');


module.exports = (err,req,res,next) => {

err.statucsCode = err.statucsCode || 500;
//err.message = err.message ||'Internal server Error';
if (process.env.NODE_ENV === 'DEVELOPMENT')
res.status(err.statucsCode).json({

    succees:true,
    error:err,
    errorMassage:err.message,
    stack:err.stack
})

}

if (process.env.NODE_ENV === 'PRODUCTION'){
    let.error={...err}

    error.message = err.message;




    // wrong mongoose object ID Error
if (err.name === 'CastError'){

const message =`Resource not found. Invalid:${err.path}`
error = new ErrorHandler(message,400)

}
//handling mongoose validation Error
if (err.name=== 'validationError' ){
const message = Object.values(err.errors).map(value => value.message);
error = new ErrorHandler(message,400)
}

    res.status(err.statucsCode).json({

        succees: false,
        message:error.message || 'Internal server Error'
        
})

}



