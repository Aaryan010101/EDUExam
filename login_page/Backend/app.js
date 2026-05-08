const express = require('express')
const app = express();
const authroutes = require('../Backend/src/auth.router.js/student.router')

app.use(express.json())

app.use('/api/auth',authroutes)
app.get('/', (req, res)=>{
    console.log("hello");
})



module.exports = app;