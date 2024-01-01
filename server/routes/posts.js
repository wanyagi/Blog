const express = require('express'); 
const postsRouter = express.Router(); 
const { getAllPosts } = require('../controllers/posts'); 
//editPost, deletePost

postsRouter.get('/', getAllPosts);   
/*postsRouter.put('/:id', editPost); 
postsRouter.delete('/:id', deletePost); */


module.exports = postsRouter; 
/*editPost, deletePost 
postsRouter.put('/:id', editPost); 
postsRouter.delete('/:id', deletePost); */