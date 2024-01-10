const pool = require('../database');
const { getPosts, getPostsByID, editPostByID, deletePostByID } = require('../Queries'); 

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

const getPostByID = async (request, response) => {

    const { id } = request.params; 

    try {
        console.log(getPostsByID); 
        const post = await pool.query(getPostsByID, [id]);
        if (post.rows.length === 0) {
            return response.status(404).json("empty");
        } else {
            console.log(post.rows)
            response.status(200).json(post.rows[0]); 
        } 
    } catch (error) {
        console.log(error)
        response.status(401).send(`"error :" ${error.message}`); 
    }
}; 

const editPost = async (request, response) => {

    const { posts_image, posts_title, posts_date, posts_description, posts_category, posts_content } = request.body;
    const { id } = request.params;

    try {
        console.log(editByID); 
        const postEdit = await pool.query(editPostByID, [posts_image, posts_title, posts_date, posts_description, posts_category, posts_content, id]);
        if (postEdit.rows.length === 0 ) {
            return response.status(403).json({message: error.message}); 
        } else {
            console.log(postEdit.rows[0]); 
            response.status(200).json(postEdit.rows[0].posts_content); 
        }
    } catch (error) {
        response.status(401).json(`"error :" ${error.message}`); 
    }
}; 

const deletePost = async (request, response) => {

    const { id } = request.params;
    try {
        const postDelete = await pool.query(deletePostByID, [id]); 
        console.log(deletePostByID); 
        console.log(postDelete); 
        response.status(200).send('Post deleted successfully'); 
    } catch (error) {
        response.status(404).json(`"error :" ${error.message}`);
    } 
};



module.exports = { getAllPosts, getPostByID, editPost, deletePost }; 