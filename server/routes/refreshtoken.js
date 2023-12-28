const express = require('express'); 
const refreshTokenRouter = express.Router(); 
const refreshtoken = require('../controllers/refreshtoken'); 

refreshTokenRouter.post('/', refreshtoken); 

module.exports = refreshTokenRouter; 