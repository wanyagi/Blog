"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getPostByID = exports.getAllPosts = exports.deletePost = void 0;
var _database = _interopRequireDefault(require("../database.js"));
var _Queries = require("../Queries.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const pool = require('../database');
const { getPosts, getPostsByID, deletePostByID } = require('../Queries'); */

const getAllPosts = async (request, response) => {
  try {
    const posts = await _database.default.query(_Queries.getPosts);
    response.status(200).send(posts.rows);
  } catch (error) {
    response.status(400).json({
      error: error.message
    });
  }
};
exports.getAllPosts = getAllPosts;
const getPostByID = async (request, response) => {
  const {
    id
  } = request.params;
  try {
    const post = await _database.default.query(_Queries.getPostsByID, [id]);
    if (post.rows.length === 0) {
      return response.status(404).json("empty");
    } else {
      response.status(200).json(post.rows[0]);
    }
  } catch (error) {
    response.status(401).send("\"error :\" ".concat(error.message));
  }
};
exports.getPostByID = getPostByID;
const deletePost = async (request, response) => {
  const {
    id
  } = request.params;
  try {
    const postDelete = await _database.default.query(_Queries.deletePostByID, [id]);
    response.status(200).send('Post deleted successfully');
  } catch (error) {
    response.status(401).json("error : ".concat(error.message));
  }
};
exports.deletePost = deletePost;