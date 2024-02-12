/*const express = require('express'); 
const reactQuillImagesRouter = express.Router();
const reactQuillImages = require('../controllers/reactQuillImages'); 
const multer  = require('multer'); */

import express from 'express'; 
const reactQuillImagesRouter = express.Router(); 
import { reactQuillImages } from '../controllers/reactQuillImages.js';
import multer from 'multer';

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, './uploads');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const imageUpload = multer({ storage: imageStorage });

reactQuillImagesRouter.post('/', imageUpload.single('image'), reactQuillImages); 

export { reactQuillImagesRouter }; 