const express = require('express'); 
const commentsRouter = express.Router(); 
const { addComment, viewComment } = require('../controllers/comments'); 
const { authorizationMiddleware } = require('../utils/authorizationMiddleware');

commentsRouter.post('/', authorizationMiddleware, addComment); 
commentsRouter.get('/:post_id', viewComment);

module.exports = commentsRouter ; 