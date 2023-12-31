const pool = require('../database');
const getAllPosts = require('../Queries'); 

const getPosts = async (request, response) => {
    try {
        const posts = await pool.query(getAllPosts); 
        response.status(200).send(posts.rows); 
    } catch (error) {
        response.status(400).send("il n'y a pas d'articles")
    }
}; 

const editPost = async (request, response) => {
    response.send("yo")
}; 

const deletePost = async (request, response) => {
    response.send("yo")
};



module.exports = { getPosts, editPost, deletePost }; 