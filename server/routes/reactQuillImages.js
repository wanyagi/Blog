const express = require('express'); 
const reactQuillImagesRouter = express.Router();
const reactQuillImages = require('../controllers/reactQuillImages'); 
const multer  = require('multer'); 

const imageStorage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, '/uploads/images');
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}_${file.originalname}`);
    }
});

const imageUpload = multer({ storage: imageStorage });

reactQuillImagesRouter.post('/', imageUpload.single('image'), reactQuillImages); 

module.exports = reactQuillImagesRouter; 