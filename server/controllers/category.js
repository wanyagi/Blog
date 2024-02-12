/*const pool = require('../database');
const { getPostsByCategory } = require('../Queries'); */

import pool from '../database.js'; 
import { getPostsByCategory } from '../Queries.js'; 

const category = async (request, response) => {
    const { category } = request.params; 

    try {
        const postsCategory = await pool.query(getPostsByCategory, [category]); 
        if (postsCategory.rows.length === 0) {
            return response.status(404).json("0")
        } else {
            return response.status(200).json(postsCategory.rows)
        }
    } catch (error) {
        response.status(401).json({error: error.message})
    }
};

export { category }; 