require('dotenv').config(); 

const refreshToken = async (request, response) => {
    try {
        const refreshToken = request.cookies.refreshtoken; 
        if (!refreshToken) return response.status(401).json({error: error.message}); 
        jwtgenerator.verify(refreshToken, process.env.REFRESHTOKEN_KEY, (error, user) => {
            if (error) return response.status(403).json({error: error.message});
            const token = jwt(user); 
            response.cookie('refreshtoken', token.refreshToken, {httpOnly: true}); 
            response.json(token)
        })
    } catch (error) {
        response.status(401).json({error: error.message})
    }
}; 

module.exports = refreshToken; 