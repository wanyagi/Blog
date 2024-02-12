/*const express = require("express");
const loginRouter = express.Router(); 
require('dotenv').config(); 
const {logUser} = require("../controllers/login"); */

import express from 'express'; 
const loginRouter = express.Router(); 
import { logUser } from '../controllers/login.js';
import dotenv from 'dotenv'; 
dotenv.config(); 

loginRouter.post('/', logUser);

export { loginRouter };