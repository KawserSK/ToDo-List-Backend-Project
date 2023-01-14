
//Basic Lib Import
const express = require('express');
const router = require('./src/route/api');
const app = new (express);
const bodyParser = require('body-parser');



//Security Middleware Lib Import
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const cors = require('cors');

//Database Lib Import
const mongoose = require('mongoose');

// Security Middleware Implement
app.use(cors())
app.use(helmet())
app.use(mongoSanitize())
app.use(xss())
app.use(hpp())

//Body Parser Implement
app.use(bodyParser.json())

//request Rate Limit
const limiter = rateLimit({window:15*60*100, max:300})
app.use(limiter)

//MongoDB Database Connection
let URL="mongodb://127.0.0.1:27017/Todo";
let OPTION={user:'', pass:'',autoIndex:true}
mongoose.connect(URL,OPTION,(error)=>{
    console.log("Connection Success")
    console.log(error)
})

//Router Implement
app.use("/api/v1",router)

//Undefine Router Implement
app.use("*", (req, res)=>{
    res.status(404).json({status:"Fail", data:"Not Found"})
})

module.exports=app;