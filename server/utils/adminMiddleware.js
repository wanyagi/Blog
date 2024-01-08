const isAdminMiddleware = (request, response, next) => {

    const accessToken = request.cookies.accesstoken; 
    
    if (!accessToken) {
        return response.status(403).json({message: "Connectez vous"}); 
    } 
    jwt.verify(accessToken, process.env.ACCESSTOKEN_KEY, (error, decoded) => {
        if (error) return response.status(403).json({error: error.message}); 
        request.user = { id: decoded.user.users_id, username: decoded.user.username, role: decoded.user.users_role }; 
        if (request.user.role !== 'admin') {
            return response.status(403).json({message: "accès refusé"}); 
        }; 

        next(); 
    })

}; 

module.exports = { isAdminMiddleware }; 