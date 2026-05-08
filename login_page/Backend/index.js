const { application } = require("express")
const express = require("express")
const app = require('../Backend/app');
 
const port = 3000;

app.listen(port, ()=>{
    console.log(`server start at port ${port}`);
});