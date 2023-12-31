const express = require('express'); 
const articleRouter = express.Router(); 
const newArticle = require('../controllers/article');  
const multer  = require('multer'); 

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        return cb(null, "uploads/")
    }, 
    filename: (request, file, cb) => {
        return cb(null, `${Date.now()}_${file.originalname}`)
    }
}); 

const imageUploadMiddleware = multer({storage}); 

articleRouter.post('/', imageUploadMiddleware.single('file'), newArticle); 

module.exports = articleRouter; 