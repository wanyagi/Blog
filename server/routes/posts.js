const express = require('express'); 
const postsRouter = express.Router(); 
const { getAllPosts, getPostByID } = require('../controllers/posts'); 
//editPost, deletePost

postsRouter.get('/', getAllPosts);   
postsRouter.get('/:id', getPostByID);   
/*postsRouter.put('/:id', editPost); 
postsRouter.delete('/:id', deletePost); */


module.exports = postsRouter; 
/*editPost, deletePost 
postsRouter.put('/:id', editPost); 
postsRouter.delete('/:id', deletePost); */