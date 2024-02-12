/*const express = require('express'); 
const refreshTokenRouter = express.Router(); 
const { refreshTheToken, deleteToken} = require('../controllers/refreshtoken'); */

import express from 'express'; 
const refreshTokenRouter = express.Router(); 
import { refreshTheToken, deleteToken } from '../controllers/refreshtoken.js';


refreshTokenRouter.post('/', refreshTheToken); 
refreshTokenRouter.delete('/', deleteToken);  

export { refreshTokenRouter }; 