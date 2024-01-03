const pool = require('../database'); 
const bcrypt = require('bcrypt'); 
const { getUsername } = require('../Queries'); 
const jwt = require('../utils/jwtgenerator'); 

const logUser = async (request, response) => {

    try {
        const {username, password } = request.body; 

        const user = await pool.query(getUsername, [username]);
        if (user.rows.length === 0) {
            return response.status(401).json("Nom d'utilisateur incorrect")
        } 

        const usersPassword = await bcrypt.compare(password, user.rows[0].users_password); 
        if (!usersPassword) {
            return response.status(401).json("Mot de passe incorrect")
        }

        const token = jwt(user.rows[0].id, user.rows[0].users_role, username); 
        response.cookie('accesstoken', token.accessToken, {httpOnly: true, secure: true, sameSite: "none", maxAge: 24 * 60 * 60 * 1000})
        response.status(200).json(token)
    } catch (error) {
        console.error(error); 
        response.status(500).json('server error')
    }
     
}; 


module.exports = logUser; 