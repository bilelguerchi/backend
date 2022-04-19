const express = require('express');
const errorMiddleware =require ('./middlewares/errors');


const app = express ();

app.use(express.json());

/////////////////////////////
app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader(
        "Access-Control-Allow-Headers",
        "Origin, Accept, Content-Type, X-Requested-with, Authorization"
    );
    res.setHeader(
        "Access-Control-Allow-Methods",
        "GET, POST, DELETE, OPTIONS, PATCH, PUT"
    );
    next();
});

// import all routes
const products = require('./routes/product');
const projets = require('./routes/projet');
//const reservation = require('./models/')    //reservation ne9ssha  schema (models)
const contrats = require('./routes/contart');
const user = require('./routes/user');
//const patterns = require('./routes/pattern');




app.use('/api/v1',products);
app.use('/api/v1',projets);
app.use('/api/v1',contrats);
app.use('/api/v1',user);
//app.use('/api/v1',patterns);


// Middleware
app.use(errorMiddleware);



//*****************************/login/*********************************** *//
//login 
app.post("/api/v1/login", (req, res) => {
console.log("Here in login", req.body);
User.findOne({ email: req.body.email }).then(
(resultEmail) => {
console.log("resultEmail", resultEmail);
if (!resultEmail) {
res.status(200).json({
findedUser: "Wrong Email"});}
return bcrypt.compare(req.body.password, resultEmail.password);})
.then((resultPwd) => {
console.log("resultPwd", resultPwd);
if (!resultPwd) {
res.status(200).json({
findedUser: "Wrong password"    });}
else {User.findOne({ email: req.body.email }).then((result) => {
console.log("result", result);
res.status(200).json({
findedUser: result })})}})});
module.exports = app ;