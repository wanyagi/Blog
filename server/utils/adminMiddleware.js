const isAdminMiddleware = (request, response, next) => {

    const accessToken = request.cookies.accesstoken; 
    
    if (!accessToken) {
        return response.status(403).json({message: "Connectez vous"}); 
    } 
    jwt.verify(accessToken, process.env.ACCESSTOKEN_KEY, (error, decoded) => {
        if (error) return response.status(403).json({error: error.message}); 
        request.user = {role: decoded.user.users_role}; 
        request.user.users_role !== 'admin' ? request.isAdmin = false : request.isAdmin = true; 
        next(); 
    })

}; 

module.exports = { isAdminMiddleware }; 