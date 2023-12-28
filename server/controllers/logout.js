const logoutUser = (request, response) => {
    try {
        response.clearCookie('refreshtoken'); 
        return response.status(200).json({message: 'refreshtoken deleted'}); 
    } catch (error) {
        response.status(401).json({error: error.message}); 
    }
}; 

module.exports = logoutUser; 