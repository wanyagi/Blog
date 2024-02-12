/*const express = require('express'); 
const { addComment, viewComment, deleteTheComment } = require('../controllers/comments'); 
const { authorizationMiddleware } = require('../utils/authorizationMiddleware'); */

import express from 'express'; 
const commentsRouter = express.Router(); 
import { addComment, viewComment, deleteTheComment } from '../controllers/comments.js';
import { authorizationMiddleware } from '../utils/authorizationMiddleware.js';

commentsRouter.post('/', authorizationMiddleware, addComment); 
commentsRouter.get('/:id', viewComment);
commentsRouter.delete('/:id', deleteTheComment);

export { commentsRouter } ; 