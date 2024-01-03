const express = require('express'); 
const registerRouter = express.Router(); 
const { registerNewUser } = require('../controllers/register'); 
const { body } = require('express-validator'); 



registerRouter.post(
    '/',
    [
    body('name').trim().not().isEmpty().withMessage('Ce champs ne peut pas être vide'),
    body('username').trim().not().isEmpty().withMessage('Ce champs ne peut pas être vide'),
    body('email').isEmail().withMessage("L'adresse mail est éronné"),
    body('password').isLength({ min: 8 }).withMessage('Au moins 8 Lettres et un chiffre'),
    ], 
    registerNewUser
); 

module.exports = registerRouter;