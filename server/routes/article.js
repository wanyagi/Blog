const express = require('express'); 
const articleRouter = express.Router(); 
const { newArticle, editArticle } = require('../controllers/article');  
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
articleRouter.put('/:id', editArticle); 

module.exports = articleRouter; 