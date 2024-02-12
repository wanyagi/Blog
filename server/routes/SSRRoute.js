/*const express = require('express'); 
const ssrRouter = express.Router(); 
const { ssrController } = require('../controllers/SSRController'); */

import express from 'express'; 
const ssrRouter = express.Router(); 
import { ssrControl } from '../controllers/SSRController.js';

ssrRouter.get('/', ssrControl); 

export { ssrRouter }; 