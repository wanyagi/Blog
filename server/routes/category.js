/*const express = require('express'); 
const { category } = require('../controllers/category'); */

import express from 'express'; 
const categoryRouter = express.Router();
import { category } from '../controllers/category.js';



categoryRouter.get('/:category', category); 

export { categoryRouter }; 