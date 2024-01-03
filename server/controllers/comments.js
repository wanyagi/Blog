const pool = require('../database'); 
const { NewComment, getComments } = require('../Queries'); 

const addComment = async (request, response) => {

    const { post_id, comment } = request.body; 
    const { user_id } = request.user; 

    try {
        console.log(NewComment); 
        const newComment = await pool.query(NewComment, [user_id, post_id, comment]); 
        response.status(200).json(newComment); 
        console.log(newComment.rows[0]); 
    } catch (error) {
        console.error(error);
        response.status(500).json({erro: error.message})
    }
}; 

const viewComment = async (request, response) => {

    const { post_id } = request.params;

    try {
        console.log(getComments); 
        const comments = await pool.query(getComments, [post_id]); 
        if (!comments.rows) {
            response.status(200).send("empty")
        }
        response.status(200).send(comments.rows); 
        console.log(comments.rows); 
    } catch (error) {
        console.error(error); 
        response.status(400).json({error: error.message}); 
    }
}; 

module.exports = {addComment, viewComment}; 