const express = require('express'); 
const registerRouter = express.Router(); 
const { getEmail, getCredentials } = require('../Queries'); 
const bcrypt = require('bcrypt'); 
const pool = require('../database'); 

registerRouter.post('/', async (request, response) => {

    try {
        const { name, username, email, password } = request.body;

        const user = await pool.query(getEmail, [email]); 
        if (user.rows.length !== 0) {
            return response.status(401).send("Cet uager existe")
        }

        const saltRound = 12;
        const salt = await bcrypt.genSalt(saltRound); 
        const hash = await bcrypt.hash(password, salt); 

        const newUser = await pool.query(getCredentials, [name, username, email, hash]); 
        response.status(200).send(newUser.rows); 
    }  catch (error) {
        response.status(500).json({error: error.message}); 
    }
}); 

module.exports = registerRouter;