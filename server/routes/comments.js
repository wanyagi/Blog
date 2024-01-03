const express = require('express'); 
const commentsRouter = express.Router(); 
const { addComment, viewComment } = require('../controllers/comments'); 

commentsRouter.post('/', addComment);
commentsRouter.get('/:post_id', viewComment);

module.exports = commentsRouter ; 