/*const { tokenGenerator } = require('../utils/jwtgenerator'); 
const jwt = require('jsonwebtoken'); */

import { tokenGenerator } from '../utils/jwtgenerator.js';
import jwt  from 'jsonwebtoken';

const refreshTheToken = (request, response) => {

    const refreshToken = request.cookies.refreshtoken; 

    try {
        if (!refreshToken) return response.status(401).json({message : "Token expired"}); 
        jwt.verify(refreshToken, process.env.REFRESHTOKEN_KEY, (error, decoded) => {
            if (error) return response.status(401).json({error: error.message}); 
            const { userid, role, user } = decoded.user;
            let token = tokenGenerator(userid, role, user); 
            response.cookie('accesstoken', token.accessToken, {httpOnly: true, secure: true, sameSite: "none" });
            response.status(200).json({ message: "Token refreshed successfully", token });
        })
    } catch (error) {
        response.status(401).json({error: error.message});
    }; 

}; 

const deleteToken = (request, response) => {
    try {
        response.clearCookie('refreshtoken'); 
        response.clearCookie('accesstoken'); 
        return response.status(200).json({message: 'token deleted'}); 
    } catch (error) {
        response.status(401).json({error: error.message});
    }
}; 



export { refreshTheToken, deleteToken }; 