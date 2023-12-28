const { check, validationResult } = require('express-validator'); 

const credentialVerification = (request, response, next) => {
    const { name, username, email, password } = request.body; 
}; 

module.exports = credentialVerification;  