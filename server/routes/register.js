const express = require('express'); 
const registerRouter = express.Router(); 
const { registerNewUser } = require('../controllers/register'); 
//const authorization = require('../utils/validInfo');
const credentialVerification = require('../utils/validInfo'); 
const { check, validationResult } = require('express-validator'); 

const validCredentials = [check(),check(),check(),check(),]

registerRouter.post('/', registerNewUser); 

module.exports = registerRouter;