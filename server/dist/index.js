"use strict";

var _express = _interopRequireDefault(require("express"));
var _cors = _interopRequireDefault(require("cors"));
var _cookieParser = _interopRequireDefault(require("cookie-parser"));
var _dotenv = _interopRequireDefault(require("dotenv"));
var _SSRRoute = require("./routes/SSRRoute.js");
var _refreshtoken = require("./routes/refreshtoken.js");
var _register = require("./routes/register.js");
var _login = require("./routes/login.js");
var _article = require("./routes/article.js");
var _posts = require("./routes/posts.js");
var _category = require("./routes/category.js");
var _comments = require("./routes/comments.js");
var _reactQuillImages = require("./routes/reactQuillImages.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const express = require("express"); 
//const app = express(); 
const cors = require("cors"); 
const cookieParser = require("cookie-parser");
require('dotenv').config(); */

const app = (0, _express.default)();
_dotenv.default.config();
const port = process.env.PORT || 5000;
app.use((0, _cors.default)({
  origin: process.env.CLIENT,
  credentials: true
}));
app.use(_express.default.json());
app.use(_express.default.urlencoded({
  extended: true
}));
app.use((0, _cookieParser.default)());
//app.use('/uploads', express.static('/uploads')); 
app.use('/uploads', _express.default.static('uploads'));
app.use(_express.default.static('./build', {
  index: false
}));
app.get('/', (request, response) => {
  response.status(200).send('sayfemums');
});
app.use('*', _SSRRoute.ssrRouter);
app.use('/refreshtoken', _refreshtoken.refreshTokenRouter);
app.use('/register', _register.registerRouter);
app.use('/login', _login.loginRouter);
app.use('/article', _article.articleRouter);
app.use('/posts', _posts.postsRouter);
app.use('/category', _category.categoryRouter);
app.use('/comments', _comments.commentsRouter);
app.use('/upload-image', _reactQuillImages.reactQuillImagesRouter);
app.listen(port, () => {
  console.log("listening on port: ".concat(port));
});