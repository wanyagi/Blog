const express = require('express'); 
const logoutRouter = express.Router();
const logoutUser = require('../controllers/logout'); 

logoutRouter.post('/', logoutUser); 

module.exports = logoutRouter; 