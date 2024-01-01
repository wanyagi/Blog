const pool = require('../database');
const { getPosts } = require('../Queries'); 

const getAllPosts = async (request, response) => {
    try {
        console.log(getPosts); 
        const posts = await pool.query(getPosts);
        console.log(posts.rows) 
        response.status(200).send(posts.rows); 
    } catch (error) {
        console.log(error)
        response.status(400).send(`"error :" ${error.message}`)
    }
}; 

const editPost = async (request, response) => {
    response.send("yo")
}; 

const deletePost = async (request, response) => {
    response.send("yo")
};



module.exports = { getAllPosts, editPost, deletePost }; 