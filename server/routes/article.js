const express = require('express'); 
const articleRouter = express.Router(); 
const article = require('../controllers/article'); 
const multer  = require('multer'); 

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        return cb(null, "uploads/")
    }, 
    filename: (request, file, cb) => {
        return cb(null, `${Date.now()}${file.originalname}`)
    }
}); 

const imageUploadMiddleware = multer({storage}); 

articleRouter.post('/', imageUploadMiddleware.single('file'), article)

module.exports = articleRouter; 