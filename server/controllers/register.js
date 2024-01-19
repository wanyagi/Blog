const pool = require('../database');
const { getEmail, addCredentials } = require('../Queries'); 
const bcrypt = require('bcrypt'); 

const registerNewUser = async (request, response) => {

    try {
        const { name, username, email, password } = request.body;

        const user = await pool.query(getEmail, [email]); 
        if (user.rows.length !== 0) {
            return response.status(401).json({error: error.message})
        }

        const saltRound = 15;
        const salt = await bcrypt.genSalt(saltRound); 
        const hash = await bcrypt.hash(password, salt); 

        const newUser = await pool.query(addCredentials, [name, username, email, hash]);
        console.log(newUser);  

        response.status(200).json({ message: "user created"}); 
    }  catch (error) {
        console.error(error); 
        response.status(500).json({error: error.message}); 
    }

}; 

module.exports = { registerNewUser }; 