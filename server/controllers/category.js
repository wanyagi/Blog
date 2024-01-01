const pool = require('../database');
const { getPostsByCategory } = require('../Queries'); 

const category = async (request, response) => {
    const { category } = request.params; 

    try {
        console.log(getPostsByCategory);
        const postsCategory = await pool.query(getPostsByCategory, [category]); 
        if (postsCategory.rows.length === 0) {
            return response.status(404).json("0")
        } else {
            console.log(postsCategory.rows);
            return response.status(200).json(postsCategory.rows)
        }
    } catch (error) {
        response.status(401).json({error: error.message})
    }
};

module.exports = { category }; 