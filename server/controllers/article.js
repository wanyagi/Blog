const pool = require('../database'); 
const { NewPost } = require('../Queries'); 
require('dotenv').config(); 

const newArticle =  async (request, response) => { 

    const URL = process.env.imageURL; 
    const { titre, date, description, category, content} = request.body;
    const file  = request.file; 

    if (!file) {
        return response.status(404).json({message : 'no file uploaded'}); 
    }

    const fileURL = `${URL}/${file.filename}`
    //const filePath = file.path; 

    try {
        const newPost = await pool.query(NewPost, [fileURL, titre, date, description, category, content]);
            response.status(200).send(newPost); 
            console.log(newPost.rows[0]) 
    } catch (error) {
        console.error(error); 
        response.status(500).json({error: error.message}); 
    }; 

}; 

module.exports = newArticle; 