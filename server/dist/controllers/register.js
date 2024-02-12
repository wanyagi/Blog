"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.registerNewUser = void 0;
var _database = _interopRequireDefault(require("../database.js"));
var _Queries = require("../Queries.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const pool = require('../database');
const { getEmail, addCredentials } = require('../Queries'); 
const bcrypt = require('bcrypt'); */

const registerNewUser = async (request, response) => {
  try {
    const {
      name,
      username,
      email,
      password
    } = request.body;
    const user = await _database.default.query(_Queries.getEmail, [email]);
    if (user.rows.length !== 0) {
      return response.status(401).json({
        error: error.message
      });
    }
    const saltRound = 15;
    const salt = await bcrypt.genSalt(saltRound);
    const hash = await bcrypt.hash(password, salt);
    const newUser = await _database.default.query(_Queries.addCredentials, [name, username, email, hash]);
    response.status(200).json({
      message: "user created"
    });
  } catch (error) {
    response.status(500).json({
      error: error.message
    });
  }
};
exports.registerNewUser = registerNewUser;