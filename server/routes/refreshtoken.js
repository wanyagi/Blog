const express = require('express'); 
const refreshTokenRouter = express.Router(); 
const { refreshTheToken, deleteToken} = require('../controllers/refreshtoken'); 

refreshTokenRouter.get('/', refreshTheToken); 
refreshTokenRouter.post('/', deleteToken); 

module.exports = refreshTokenRouter; 