const express = require('express'); 
const refreshTokenRouter = express.Router(); 
const { refreshTheToken, deleteToken} = require('../controllers/refreshtoken'); 

refreshTokenRouter.post('/', refreshTheToken); 
refreshTokenRouter.delete('/', deleteToken);  

module.exports = refreshTokenRouter; 