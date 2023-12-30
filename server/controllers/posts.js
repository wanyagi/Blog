const pool = require('../database');
const { getAllPosts, getPostByCategory } = require('../Queries'); 

const getPosts = async (request, response) => {
    try {
        const blogPosts = await pool.query(getAllPosts); 
        response.json(blogPosts.rows)
    } catch (error) {
        response.status(500).json({error: error.message})
    }
};

const getPost = (request, response) => {
    const { category } = request.query; 

    try {
        const postByCategory = pool.query(getPostByCategory, [category]); 
        if (postByCategory.rows.length === 0) {
            return response.status(401).json({message: "Il n'y a pas d'atricles dans cette catégorie."})
        } else {
            return response.status(200).json(postByCategory.rows)
        }
    } catch (error) {
        response.status(401).json({error: error.message})
    }
}; 

const editPost = async (request, response) => {}; 

const deletePost = async (request, response) => {};



module.exports = { getPosts, getPost, editPost, deletePost }; 