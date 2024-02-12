/*const pool = require('../database'); 
const bcrypt = require('bcrypt'); 
const { getUsername } = require('../Queries'); 
const { tokenGenerator } = require('../utils/jwtgenerator'); */

import pool from '../database.js';
import bcrypt from 'bcrypt'; 
import { getUsername } from '../Queries.js';
import { tokenGenerator } from '../utils/jwtgenerator.js';

const logUser = async (request, response) => {

    try {
        const {username, password } = request.body; 

        const user = await pool.query(getUsername, [username]);
        if (user.rows.length === 0) {
            return response.status(401).json({usernameError: "Nom d'utilisateur incorrect"});
        } 

        const usersPassword = await bcrypt.compare(password, user.rows[0].users_password); 
        if (!usersPassword) {
            return response.status(401).json({passwordError: "Mot de passe incorrect"});
        }

        const token = tokenGenerator(user.rows[0].users_id, user.rows[0].users_role, username); 
        response.cookie('accesstoken', token.accessToken, {httpOnly: true, secure: true, sameSite: "none", maxAge: 10 * 60 * 1000 });
        response.cookie('refreshtoken', token.refreshToken, {httpOnly: true, secure: true, sameSite: "none" });
        response.status(200).send({users_role: user.rows[0].users_role}); 
    } catch (error) {
        response.status(401).json({error: error.message});
    }
     
}; 

export {logUser}; 