const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
require('dotenv').config();  


const Port = 5000;

app.use(cors({ origin: process.env.URL, credentials: true, })); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use('/uploads', express.static('uploads')); 
app.use('/uploads/images', express.static('uploads/images')); 

const registerRouter = require("./routes/register"); 
app.use('/register', registerRouter); 

const loginRouter = require('./routes/login'); 
app.use('/login', loginRouter); 

const logoutRouter = require('./routes/logout'); 
app.use('/logout', logoutRouter); 

const refreshToken = require('./routes/refreshtoken'); 
app.use('/refreshtoken', refreshToken); 

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

app.listen(Port, () => {
    console.log(`listening on port: ${Port}`)
});

