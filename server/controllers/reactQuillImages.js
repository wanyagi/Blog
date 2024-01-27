require('dotenv').config(); 

const reactQuillImages = (request, response) => {
    
    if (!request.file) {
        return response.status(400).send('No image file uploaded.');
    }
//protocol https remember
    const protocol = process.env.PROTOCOL || 'http'; 
    const imageUrl = `${protocol}://${request.get('host')}/uploads/${request.file.filename}`;
    response.json({ imageUrl });
}

module.exports = reactQuillImages; 