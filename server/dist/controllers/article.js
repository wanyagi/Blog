"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.newArticle = exports.editArticle = void 0;
var _database = _interopRequireDefault(require("../database.js"));
var _Queries = require("../Queries.js");
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const pool = require('../database'); 
const { NewPost, editPostByID } = require('../Queries'); 
require('dotenv').config(); */

_dotenv.default.config();
const newArticle = async (request, response) => {
  const URL = process.env.imageURL;
  const {
    titre,
    date,
    description,
    category,
    content
  } = request.body;
  const file = request.file;
  let image;
  file ? image = "".concat(URL, "/").concat(file.filename) : null;
  try {
    const newPost = await _database.default.query(_Queries.NewPost, [image, titre, date, description, category, content]);
    response.status(200).send(newPost);
  } catch (error) {
    console.log(error);
    response.status(401).json({
      error: error.message
    });
  }
  ;
};
exports.newArticle = newArticle;
const editArticle = async (request, response) => {
  const URL = process.env.imageURL;
  const {
    posts_title,
    posts_date,
    posts_description,
    posts_category,
    posts_content
  } = request.body;
  const {
    id
  } = request.params;
  const file = request.file;
  let urlFile;
  file ? urlFile = "".concat(URL, "/").concat(file.filename) : null;
  try {
    const postEdit = await _database.default.query(_Queries.editPostByID, [urlFile, posts_title, posts_date, posts_description, posts_category, posts_content, id]);
    response.status(200).json(postEdit.rows[0]);
  } catch (error) {
    response.status(401).json("This is the error : ".concat(error.message));
  }
};
exports.editArticle = editArticle;