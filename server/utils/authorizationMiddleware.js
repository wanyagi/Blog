const authorizationMiddleware = async (request, response, next) => {
    
    try {
        const authorizationToken = await request.headers['authorization']; 
        const token = await authorizationToken && authorizationToken.split(' ')[1]; 
        if (!token) {
            return response.status(403).json("acces refuser"); 
        } 
        jwt.verify(token, process.env.ACCESSTOKEN, (error, user) => {
            if (error) return response.status(403).json({error: error.message}); 
            request.user = user; 
            next(); 
        })
    } catch (error) {
        return response.status(403).json("acces refuser"); 
    }; 
}; 

module.exports = { authorizationMiddleware }; 