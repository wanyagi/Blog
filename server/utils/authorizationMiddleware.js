const authorizationMiddleware = (request, response, next) => {
    
    const authorizationToken = request.headers['authorization']; 
    const token = authorizationToken && authorizationToken.split(' ')[1]; 
    if (!token) {
        return response.status(403).json("pas de token"); 
    } 
    jwt.verify(token, process.env.ACCESSTOKEN_KEY, (error, decoded) => {
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