const jwt = require('../utils/jwtgenerator'); 

const refreshTheToken = (request, response) => {

    const refreshToken = request.cookies.refreshtoken; 

    try {
        if (!refreshToken) return response.status(401).json({message : "token unavailable"}); 
        jwt.verify(refreshToken, process.env.REFRESHTOKEN_KEY, (error, decoded) => {
            if (error) return response.status(401).json({error: error.message}); 
            const { users_id, users_role, username } = decoded.user;
            let token = jwt(users_id, users_role, username); 
            response.cookie('refreshtoken :', token.refreshToken, {httpOnly: true, secure: true, sameSite: "none" })
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