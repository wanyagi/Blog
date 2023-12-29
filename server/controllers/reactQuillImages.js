const reactQuillImages = (request, response) => {
    if (!request.file) {
        return res.status(400).send('No image file uploaded.');
    }

    const imageUrl = `${request.protocol}://${request.get('host')}/uploads/images/${request.file.filename}`;
    response.json({ imageUrl });
}

module.exports = reactQuillImages; 