/*const pool = require('../database'); 
const { NewComment, getComments, deleteComment } = require('../Queries'); */

import pool from '../database.js'; 
import { NewComment, getComments, deleteComment } from '../Queries.js';

const addComment = async (request, response) => {

    const { id, comment } = request.body; 
    const { usersid, username } = request.user;

    try {
        const newComment = await pool.query(NewComment, [usersid, id, username, comment]); 
        response.status(200).json(newComment.rows[0]); 
    } catch (error) {
        response.status(500).json({error: error.message})
    }
}; 

const viewComment = async (request, response) => {

    const postId = request.params.id; 

    try {
        const comments = await pool.query(getComments, [postId]); 
        if (!comments.rows) {
            response.status(200).send("empty")
        }
        response.status(200).send(comments.rows); 
    } catch (error) { 
        response.status(400).json({error: error.message}); 
    }
}; 

const deleteTheComment = async (request, response) => {

    const comments_id = request.params.id; 

    try {
        const commentDeleted = await pool.query(deleteComment, [comments_id]); 
        response.status(200).json({message: 'Comment deleted'}); 
    } catch (error) {
        response.status(401).json({error: error.message}); 
    }
}; 

export {addComment, viewComment, deleteTheComment}; 