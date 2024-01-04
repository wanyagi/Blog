const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

const jwtgenerator = (users_id, users_role, username) => {

    const payload = {user: {"userid": users_id, "role": users_role, "user": username}};
 
    const accessToken = jwt.sign(payload, process.env.ACCESSTOKEN_KEY, {expiresIn: "15m"});
    const refreshToken = jwt.sign(payload, process.env.REFRESHTOKEN_KEY, {expiresIn: "10d"});
    return ({accessToken, refreshToken}); 
}; 

module.exports = jwtgenerator; 