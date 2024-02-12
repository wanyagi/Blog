/*const express = require('express'); 
const { newArticle, editArticle } = require('../controllers/article');  
const multer  = require('multer'); */

import express from 'express'; 
const articleRouter = express.Router(); 
import { newArticle, editArticle } from '../controllers/article.js';
import multer from 'multer'; 


const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        return cb(null, './uploads');
    }, 
    filename: (request, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`);
    } 
}); 

const imageUploadMiddleware = multer({storage}); 

articleRouter.post('/', imageUploadMiddleware.single('file'), newArticle); 
articleRouter.put('/:id', imageUploadMiddleware.single('file'), editArticle); 

export { articleRouter }; 