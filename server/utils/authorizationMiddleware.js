const jwt = require('jsonwebtoken'); 

const authorizationMiddleware = (request, response, next) => {

    const accessToken = request.cookies.accesstoken;

    if (!accessToken) {
        return response.status(403).json({message: "Connectez vous"}); 
    } 
    jwt.verify(accessToken, process.env.ACCESSTOKEN_KEY, (error, decoded) => {
        if (error) return response.status(403).json({error: error.message}); 
        request.user = { usersid: decoded.user.userid, role: decoded.user.role, username: decoded.user.user, }; 
        next(); 
    })

};   

module.exports = { authorizationMiddleware }; 