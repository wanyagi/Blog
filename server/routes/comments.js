const express = require('express'); 
const commentsRouter = express.Router(); 
const { addComment, viewComment, deleteTheComment } = require('../controllers/comments'); 
const { authorizationMiddleware } = require('../utils/authorizationMiddleware');

commentsRouter.post('/', authorizationMiddleware, addComment); 
commentsRouter.get('/:id', viewComment);
commentsRouter.delete('/:id', deleteTheComment);

module.exports = commentsRouter ; 