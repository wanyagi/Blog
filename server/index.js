const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
const cookieParser = require("cookie-parser");
require('dotenv').config();  

const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT, credentials: true, })); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser()); 
app.use('/uploads', express.static('uploads')); 
app.use('/uploads/images', express.static('uploads/images'));

app.get('/', (request, response) => {response.status(200).send('sayfemums')}); 

const refreshToken = require('./routes/refreshtoken'); 
app.use('/refreshtoken', refreshToken); 

const registerRouter = require("./routes/register"); 
app.use('/register', registerRouter); 

const loginRouter = require('./routes/login'); 
app.use('/login', loginRouter); 

const articleRouter = require('./routes/article'); 
app.use('/article', articleRouter); 

const postsRouter = require('./routes/posts'); 
app.use('/posts', postsRouter); 

const categoryRouter = require('./routes/category'); 
app.use('/category', categoryRouter);

const commentsRouter = require('./routes/comments'); 
app.use('/comments', commentsRouter); 

const reactQuillImages = require('./routes/reactQuillImages'); 
app.use('/upload-image', reactQuillImages); 

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
});