/*const express = require("express"); 
//const app = express(); 
const cors = require("cors"); 
const cookieParser = require("cookie-parser");
require('dotenv').config(); */

import express from 'express'; 
const app = express(); 
import cors from 'cors'; 
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'; 
dotenv.config(); 


const port = process.env.PORT || 5000;

app.use(cors({ origin: process.env.CLIENT, credentials: true, })); 
app.use(express.json()); 
app.use(express.urlencoded({extended: true}));
app.use(cookieParser()); 
//app.use('/uploads', express.static('/uploads')); 
app.use('/uploads', express.static('uploads')); 
app.use(express.static('./build', {index: false})); 


app.get('/', (request, response) => {response.status(200).send('sayfemums')}); 

import { ssrRouter } from './routes/SSRRoute.js';
app.use('*', ssrRouter); 

import { refreshTokenRouter } from './routes/refreshtoken.js';
app.use('/refreshtoken', refreshTokenRouter); 

import { registerRouter } from './routes/register.js';
app.use('/register', registerRouter); 

import { loginRouter } from './routes/login.js';
app.use('/login', loginRouter); 

import { articleRouter } from './routes/article.js';
app.use('/article', articleRouter); 

import { postsRouter } from './routes/posts.js';
app.use('/posts', postsRouter); 

import { categoryRouter } from './routes/category.js';
app.use('/category', categoryRouter);

import { commentsRouter } from './routes/comments.js';
app.use('/comments', commentsRouter); 

import { reactQuillImagesRouter } from './routes/reactQuillImages.js';
app.use('/upload-image', reactQuillImagesRouter); 

app.listen(port, () => {
    console.log(`listening on port: ${port}`)
});