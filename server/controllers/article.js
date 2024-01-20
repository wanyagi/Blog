const pool = require('../database'); 
const { NewPost, editPostByID } = require('../Queries'); 
require('dotenv').config(); 

const newArticle =  async (request, response) => { 

    const URL = process.env.imageURL; 
    const { titre, date, description, category, content} = request.body;
    const file  = request.file; 

    if (!file) {
        return response.status(404).json({message : 'no file uploaded'}); 
    };

    const image = `${URL}/uploads/${file.filename}`;

    try {
        const newPost = await pool.query(NewPost, [image, titre, date, description, category, content]);
        response.status(200).send(newPost); 
    } catch (error) {
        response.status(401).json({error: error.message}); 
    }; 

}; 

const editArticle = async (request, response) => {

    const URL = process.env.imageURL;
    const { posts_title, posts_date, posts_description, posts_category, posts_content } = request.body;
    const { id } = request.params;

    const file = request.file;
    
    let urlFile;
    if (file) {
        urlFile = `${URL}/${file.filename}`;
    }; 
    
    try {
        const postEdit = await pool.query(editPostByID, [urlFile, posts_title, posts_date, posts_description, posts_category, posts_content, id]);
        response.status(200).json(postEdit.rows[0]); 
    } catch (error) {
      response.status(401).json(`error : ${error.message}`); 
    }

}; 

module.exports = { newArticle, editArticle }; 