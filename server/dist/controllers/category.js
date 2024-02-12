"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.category = void 0;
var _database = _interopRequireDefault(require("../database.js"));
var _Queries = require("../Queries.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const pool = require('../database');
const { getPostsByCategory } = require('../Queries'); */

const category = async (request, response) => {
  const {
    category
  } = request.params;
  try {
    const postsCategory = await _database.default.query(_Queries.getPostsByCategory, [category]);
    if (postsCategory.rows.length === 0) {
      return response.status(404).json("0");
    } else {
      return response.status(200).json(postsCategory.rows);
    }
  } catch (error) {
    response.status(401).json({
      error: error.message
    });
  }
};
exports.category = category;