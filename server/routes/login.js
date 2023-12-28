const express = require("express");
const loginRouter = express.Router(); 
require('dotenv').config(); 
const logUser = require("../controllers/login");


loginRouter.post('/', logUser);


module.exports = loginRouter;