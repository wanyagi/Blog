const express = require('express'); 
const postsRouter = express.Router(); 
const { getPosts } = require('../controllers/posts'); 

postsRouter.get('/', getPosts); 
postsRouter.get('/:id', (request, response) => {}); 
postsRouter.put('/:id', (request, response) => {}); 
postsRouter.delete('/:id', (request, response) => {}); 

module.exports = postsRouter; 
