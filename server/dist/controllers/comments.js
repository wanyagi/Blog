"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.viewComment = exports.deleteTheComment = exports.addComment = void 0;
var _database = _interopRequireDefault(require("../database.js"));
var _Queries = require("../Queries.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const pool = require('../database'); 
const { NewComment, getComments, deleteComment } = require('../Queries'); */

const addComment = async (request, response) => {
  const {
    id,
    comment
  } = request.body;
  const {
    usersid,
    username
  } = request.user;
  try {
    const newComment = await _database.default.query(_Queries.NewComment, [usersid, id, username, comment]);
    response.status(200).json(newComment.rows[0]);
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
};
exports.addComment = addComment;
const viewComment = async (request, response) => {
  const postId = request.params.id;
  try {
    const comments = await _database.default.query(_Queries.getComments, [postId]);
    if (!comments.rows) {
      response.status(200).send("empty");
    }
    response.status(200).send(comments.rows);
  } catch (error) {
    response.status(400).json({
      error: error.message
    });
  }
};
exports.viewComment = viewComment;
const deleteTheComment = async (request, response) => {
  const comments_id = request.params.id;
  try {
    const commentDeleted = await _database.default.query(_Queries.deleteComment, [comments_id]);
    response.status(200).json({
      message: 'Comment deleted'
    });
  } catch (error) {
    response.status(401).json({
      error: error.message
    });
  }
};
exports.deleteTheComment = deleteTheComment;