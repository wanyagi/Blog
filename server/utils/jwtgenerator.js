const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

const jwtgenerator = (id, users_role, username) => {

    const payload = {user: {"userid": id, "role": users_role, "user": username}};
 
    const accessToken = jwt.sign(payload, process.env.ACCESSTOKEN_KEY, {expiresIn: "15m"});
    const refreshToken = jwt.sign(payload, process.env.REFRESHTOKEN_KEY, {expiresIn: "2h"});
    return ({accessToken, refreshToken}); 
}; 

module.exports = jwtgenerator; 