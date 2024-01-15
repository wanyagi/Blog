const express = require('express'); 
const registerRouter = express.Router(); 
const { registerNewUser } = require('../controllers/register'); 

registerRouter.post('/', registerNewUser); 

module.exports = registerRouter;