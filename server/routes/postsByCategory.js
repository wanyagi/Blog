const express = require('express'); 
const postByCategoryRouter = express.Router(); 
const getPostsByCategory = require('../controllers/postsByCategory'); 

postByCategoryRouter.get('/:category', getPostsByCategory); 

module.exports = postByCategoryRouter; 