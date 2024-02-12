/*const express = require('express'); 
const registerRouter = express.Router(); 
const { registerNewUser } = require('../controllers/register'); */

import express from 'express'; 
const registerRouter = express.Router(); 
import { registerNewUser } from '../controllers/register.js';

registerRouter.post('/', registerNewUser); 

export { registerRouter };