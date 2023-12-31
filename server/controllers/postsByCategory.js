const pool = require('../database'); 
const getPostByCategory = require('../Queries'); 

const getPostsByCategory = (request, response) => {
    const { catégorie } = request.params; 

    try {
        const postByCategory = pool.query(getPostByCategory, [catégorie]); 
        if (postByCategory.rows.length === 0) {
            return response.status(401).json({message: "Il n'y a pas d'atricles dans cette catégorie."})
        } else {
            return response.status(200).json(postByCategory.rows)
        }
    } catch (error) {
        response.status(401).json({error: error.message})
    }
};

module.exports = getPostsByCategory; 