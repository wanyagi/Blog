const express = require("express"); 
const app = express(); 
const cors = require("cors"); 
const session = require("express-session");
const store = new session.MemoryStore();
const passport = require("passport");
const multer = require('multer'); 
require('dotenv').config();  


const Port = /*process.env.PORT || */5000;

app.use(cors({ origin: "http://localhost:3000", credentials: true, })); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: process.env.SECRET, 
    cookie: {
    maxAge: 1000*60*60*3, 
    secure: true, 
    sameSite: "none",  
    httpOnly: true,
    },  
    resave: false, 
    saveUninitialized: false, 
    store, 
})); 
app.use(passport.initialize()); //initilaize passport
app.use(passport.session()); //allows persistent logins  

app.get('*', (request, response) => {
    response.json()
});

const storage = multer.diskStorage({
    destination: (request, response, cb) => {
        cb(null, './uploads');
    }, 
    filename: (request, response, cb) => {
        cb(null, `${Date.now()+file.originalname}`)
    }
});

const uploadImageMiddleware = multer({ storage }); 

app.post('/uploads', uploadImageMiddleware.single('file'), (request, response) => {
    console.log(request.file);
    console.log(request.body);
}); 

const registerRouter = require("./routes/register"); 
app.use('/register', registerRouter); 

const loginRouter = require('./routes/login'); 
app.use('/login', loginRouter); 

const newArticleRouter = require('./routes/newArticle'); 
app.use('/article', newArticleRouter); 

const postsRouter = require('./routes/posts'); 
app.use('/posts', postsRouter);


app.listen(Port, () => {
    console.log(`listening on port: ${Port}`)
});

