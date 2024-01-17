const pool = require('../database');
const { getPosts, getPostsByID, deletePostByID } = require('../Queries'); 

const getAllPosts = async (request, response) => {
    try {
        const posts = await pool.query(getPosts); 
        response.status(200).send(posts.rows); 
    } catch (error) {
        response.status(400).send(`"error :" ${error.message}`)
    }
}; 

const getPostByID = async (request, response) => {

    const { id } = request.params; 

    try {
        const post = await pool.query(getPostsByID, [id]);
        if (post.rows.length === 0) {
            return response.status(404).json("empty");
        } else {
            response.status(200).json(post.rows[0]); 
        } 
    } catch (error) {
        response.status(401).send(`"error :" ${error.message}`); 
    }
}; 

const deletePost = async (request, response) => {

    const { id } = request.params;
    
    try {
        const postDelete = await pool.query(deletePostByID, [id]); 
        response.status(200).send('Post deleted successfully'); 
    } catch (error) {
        response.status(401).json(`error : ${error.message}`);
    } 
};



module.exports = { getAllPosts, getPostByID, deletePost }; 