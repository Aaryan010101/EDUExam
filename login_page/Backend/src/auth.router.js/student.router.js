const express = require("express")
const authrouter = express.Router();
const authcontroller = require("../auth.controller.js/student.controller")

authrouter.post("/Student/login",authcontroller.studentauth);

module.exports = authrouter;