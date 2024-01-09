const express = require('express'); 
const categoryRouter = express.Router(); 
const { category } = require('../controllers/category');

 
categoryRouter.get('/:category', category); 

module.exports = categoryRouter; 