const express = require('express'); 
const postsRouter = express.Router(); 
const { getAllPosts, getPostByID, editPost, deletePost } = require('../controllers/posts'); 

postsRouter.get('/', getAllPosts);   
postsRouter.get('/:id', getPostByID);   
postsRouter.get('/:id', editPost); 
postsRouter.delete('/:id',deletePost); 


module.exports = postsRouter; 
