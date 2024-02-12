/*const express = require('express'); 
const postsRouter = express.Router(); 
const { getAllPosts, getPostByID, deletePost } = require('../controllers/posts'); */

import express from 'express'; 
const postsRouter = express.Router(); 
import { getAllPosts, getPostByID, deletePost} from '../controllers/posts.js';

postsRouter.get('/', getAllPosts);   
postsRouter.get('/:id', getPostByID);   
postsRouter.delete('/:id',deletePost); 


export { postsRouter }; 
