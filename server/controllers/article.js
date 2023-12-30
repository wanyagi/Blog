const pool = require('../database'); 
const { NewPost } = require('../Queries'); 

const artcile =  async (request, response) => { 
    const { titre, date, description, category, content} = request.body;
    const file  = request.file; 
    const filePath = file.path; 

    try {
        const newPost = await pool.query(NewPost, [filePath, titre, date, description, category, content]);
            response.status(200).send(newPost); 
            console.log(newPost.rows[0]) 
    } catch (error) {
        console.error(error); 
        response.status(500).json({error: error.message}); 
    }; 

}; 

module.exports = artcile; 