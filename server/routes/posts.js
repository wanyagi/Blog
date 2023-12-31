const express = require('express'); 
const postsRouter = express.Router(); 
const { getPosts, editPost, deletePost } = require('../controllers/posts'); 

postsRouter.get('/articles', getPosts); 
postsRouter.put('/:id', editPost); 
postsRouter.delete('/:id', deletePost); 

module.exports = postsRouter; 
