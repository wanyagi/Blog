const express = require("express");
const loginRouter = express.Router(); 
const passport = require("passport"); 
const LocalStrategy = require('passport-local').Strategy; 
const pool = require('../database');
const bcrypt = require('bcrypt'); 
require('dotenv').config(); 
const { getUsername, getUsersId } = require('../Queries'); 


passport.use(
    new LocalStrategy((username, password, done) => {
        const result = pool.query(getUsername, [username], (error, result) => {
            if (error) return done(error); 
            console.log(error); 
            if (result.rows.length > 0) {
                const user = result.rows[0]; 
                console.log(user)
                bcrypt.compare(password, user.password, (error, match) => {
                    if (error) return done(error); 
                    if (match) {
                        return done(null, user); 
                    } else {
                        return done(null, false, {message: "Mot de passe incorrect"}); 
                    }
                })
            } else {
              return done(null, false, {message: "Compte introuvable. Inscrivez vous"});  
            }
        });
    }));

passport.serializeUser((user, done) => {
    done(null, user.id); 
}); 

passport.deserializeUser((id, done) => {
    pool.query(getUsersId, [id], (error, result) => {
        if (error) {
            console.log(error); 
        }
        return done(null, result.rows[0]);
    }); 
}); 

loginRouter.post('/', passport.authenticate('local', {failureRedirect: '/login', }), (request, response) => {
    response.status(403).json();
});


loginRouter.get('/', (request, response) => {
    response.status(200).json(); 
}) 

module.exports = loginRouter;