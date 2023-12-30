const express = require('express'); 
const postsRouter = express.Router(); 
const { getPosts, getPost, editPost, deletePost } = require('../controllers/posts'); 

postsRouter.get('/', getPosts); 
postsRouter.get('/:id', getPost); 
postsRouter.put('/:id', editPost); 
postsRouter.delete('/:id', deletePost); 

module.exports = postsRouter; 
