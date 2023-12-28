const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

const jwtgenerator = (id, users_role) => {

    const payload = {user: {id, users_role}};
 
    const accessToken = jwt.sign(payload, process.env.ACCESSTOKEN_KEY, {expiresIn: "15m"});
    const refreshToken = jwt.sign(payload, process.env.REFRESHTOKEN_KEY, {expiresIn: "2h"});
    return ({accessToken, refreshToken}); 
}; 

module.exports = jwtgenerator; 