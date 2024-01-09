const jwtToken = require('../utils/jwtgenerator'); 
const jwt = require('jsonwebtoken'); 

const refreshTheToken = (request, response) => {

    const refreshToken = request.cookies.refreshtoken; 

    try {
        if (!refreshToken) return response.status(401).json({message : "Token expired"}); 
        jwt.verify(refreshToken, process.env.REFRESHTOKEN_KEY, (error, decoded) => {
            if (error) return response.status(401).json({error: error.message}); 
            const { users_id, users_role, username } = decoded.user;
            let token = jwtToken(users_id, users_role, username); 
            response.cookie('accesstoken', token.accessToken, {httpOnly: true, secure: true, sameSite: "none" });
            response.status(200).json({ message: "Token refreshed successfully" });
        })
    } catch (error) {
        response.status(401).json({error: error.message});
    }
}; 

const deleteToken = (request, response) => {
    try {
        response.clearCookie('refreshtoken'); 
        return response.status(200).json({message: 'token deleted'}); 
    } catch (error) {
        response.status(401).json({error: error.message});
    }
}; 



module.exports = { refreshTheToken, deleteToken }; 