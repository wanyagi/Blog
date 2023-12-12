const express = require('express'); 
const newArticleRouter = express.Router(); 
const pool = require('../database'); 
const { postNewPost, getAllPosts } = require('../Queries'); 
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

newArticleRouter.get('/', async (request, response) => {
    
    const allPosts = await pool.query(getAllPosts, []); 
}); 

newArticleRouter.post('/', imageUploadMiddleware.single('file'), async (request, response) => { 
    const { file, titre, date, description, category, content} = request.body;

    try {
        const newPost = await pool.query(postNewPost, [file , titre, date, description, category, content]);
            response.status(200).send(newPost); 
            console.log(newPost.rows[0]) 
    } catch (error) {
        console.error(error); 
        response.status(500).json({error: error.message}); 
    }; 

})

module.exports = newArticleRouter; 