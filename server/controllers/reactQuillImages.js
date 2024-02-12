//require('dotenv').config();

import dotenv from 'dotenv'; 
dotenv.config();  

const reactQuillImages = (request, response) => {
    
    if (!request.file) {
        return response.status(400).send('No image file uploaded.');
    };

    const protocol = /*process.env.PROTOCOL || */'http'; 
    const imageUrl = `${protocol}://${request.get('host')}/uploads/${request.file.filename}`;
    response.json({ imageUrl });
}

export { reactQuillImages } ; 