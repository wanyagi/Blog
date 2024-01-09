const pool = require('../database');
const { getEmail, addCredentials } = require('../Queries'); 
const bcrypt = require('bcrypt'); 
const { validationResult } = require('express-validator');  

const registerNewUser = async (request, response) => {

    const errors = validationResult(request);
    if (!errors.isEmpty()) {
        return response.status(422).json({ errors: errors.array() });
    }

    try {
        const { name, username, email, password } = request.body;

        const user = await pool.query(getEmail, [email]); 
        if (user.rows.length !== 0) {
            return response.status(401).json({message : "Cet usager existe"})
        }

        const saltRound = 15;
        const salt = await bcrypt.genSalt(saltRound); 
        const hash = await bcrypt.hash(password, salt); 

        const newUser = await pool.query(addCredentials, [name, username, email, hash]); 

        response.status(200).json({ message: "user created"}); 
    }  catch (error) {
        response.status(500).json({error: error.message}); 
    }

}; 

module.exports = { registerNewUser }; 