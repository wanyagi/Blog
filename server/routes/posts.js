const express = require('express'); 
const postsRouter = express.Router(); 
const { getAllPosts, getPostByID, deletePost } = require('../controllers/posts'); 

postsRouter.get('/', getAllPosts);   
postsRouter.get('/:id', getPostByID);   
postsRouter.delete('/:id',deletePost); 


module.exports = postsRouter; 
