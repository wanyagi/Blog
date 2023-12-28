const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
const multer = require('multer'); 
require('dotenv').config();  


const Port = 5000;

app.use(cors({ origin: process.env.URL, credentials: true, })); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
  

app.get('*', (request, response) => {
    response.json()
});

const storage = multer.diskStorage({
    destination: (request, file, cb) => {
        cb(null, './uploads');
    }, 
    filename: (request, file, cb) => {
        cb(null, `${Date.now()+file.originalname}`)
    }
});

const uploadImageMiddleware = multer({ storage }); 

app.post('/uploads', uploadImageMiddleware.single('file'), (request, response) => {
    console.log(request.file);
    console.log(request.body);
    const url = 
    response.json({imageURL}); 
}); 

const registerRouter = require("./routes/register"); 
app.use('/register', registerRouter); 

const loginRouter = require('./routes/login'); 
app.use('/login', loginRouter); 

const logoutRouter = require('./routes/logout'); 
app.use('/logout', logoutRouter); 

const refreshToken = require('./routes/refreshtoken'); 
app.use('/refreshtoken', refreshToken); 

const newArticleRouter = require('./routes/newArticle'); 
app.use('/article', newArticleRouter); 

const postsRouter = require('./routes/posts'); 
app.use('/posts', postsRouter);


app.listen(Port, () => {
    console.log(`listening on port: ${Port}`)
});

