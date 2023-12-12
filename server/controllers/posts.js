const pool = require('../database');
const { getCategory } = require('../Queries');  

const getPosts = (request, response) => {
    const { category } = request.query; 

    try {
        const post = pool.query(getCategory, [category], (error, result) => {
            if (error) {
                return response.status(401).json(error.message)
            } else {
                return response.status(200).json(result); 
            }
        })
        console.log(post); 
    } catch (error) {
        console.error(error)
    }; 
}; 

module.exports = { getPosts }; 