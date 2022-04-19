


const reservations= require('../models/reservation');

// create new reservation ==>/api/v1/reservation/new
exports.newreservation = async(req,res,next) => {
const reservation = await reservations.create(req.body);
res.status(201).json({
    success: true,
    reservation
})

}


//get all reservations => /api/v1/reservations
exports.getreservations = async (req,res,next) => {
    const reservation = await products.find();
 res.status(200).json({
     success:true,
     count: reservation.length,
reservation
    })

}
// get single reservation detalis =>  /api/v1/reservations/:id
//m 5edmtech
exports.getSinglereservation  = async (req,res,next) => {
    const reservation = await reservation.findById(req.parms.id)


    if (!reservation){
        return res.status(404).json({
            success: false,
            message : 'reservation not found'
        })
    }

    res.status(200).json({
        success: true,
        reservation
    })
}
// update reservation    => /api/admin/v1/reservations/:id

exports.updatereservation = async (req,res,next) =>{
    let reservation = await reservation.findById(req.parms.id);
    if (!reservation) {

return res.status(404).json({
    success:false,
    message : 'reservation not found'
})

    }
    reservation = await reservation.findByIdAndUpdate(req.params.id,req.body,{
        new :true, 
        runvalidators : true,
        usefindAndModify:false 

    });
    res.send(200).json({
        success : true,
        reservation

    })
}
// delete reservation =>  /api/admin/v1/reservations/:id
exports.deletereservation = async (req,res,next) => {
    const reservation  = await reservation.findById(req.params.id);
    if (!reservation){
        return res.status(404).json({
            success: false,
            message : 'reservation not found'
        })
    }

    await reservation.remove();

    res.status(200).json({
        success: true,
        message : 'reservation is deleted .'


    })

}