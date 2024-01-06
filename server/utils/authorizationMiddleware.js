const authorizationMiddleware = (request, response, next) => {

    const accessToken = request.cookies.accesstoken; 
    
    /*const authorizationToken = request.headers['authorization']; 
    const token = authorizationToken && authorizationToken.split(' ')[1]; */
    if (!accessToken) {
        return response.status(403).json({message: "Connectez vous"}); 
    } 
    jwt.verify(accessToken, process.env.ACCESSTOKEN_KEY, (error, decoded) => {
        if (error) return response.status(403).json({error: error.message}); 
        request.user = {
            id: decoded.user.users_id,
            username: decoded.user.username,
            role: decoded.user.users_role
        }; 
        next(); 
    })

};   

module.exports = { authorizationMiddleware }; 