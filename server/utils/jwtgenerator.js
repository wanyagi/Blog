const jwt = require('jsonwebtoken'); 
require('dotenv').config(); 

const tokenGenerator = (users_id, users_role, username, ) => {

    const payload = {user: {"userid": users_id,"role": users_role, "user": username, }};
 
    const accessToken = jwt.sign(payload, process.env.ACCESSTOKEN_KEY, {expiresIn: "10m"});
    const refreshToken = jwt.sign(payload, process.env.REFRESHTOKEN_KEY, {expiresIn: "2d"});
    return ({accessToken, refreshToken}); 
}; 

module.exports = { tokenGenerator }; 