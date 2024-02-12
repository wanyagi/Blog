"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.logUser = void 0;
var _database = _interopRequireDefault(require("../database.js"));
var _bcrypt = _interopRequireDefault(require("bcrypt"));
var _Queries = require("../Queries.js");
var _jwtgenerator = require("../utils/jwtgenerator.js");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const pool = require('../database'); 
const bcrypt = require('bcrypt'); 
const { getUsername } = require('../Queries'); 
const { tokenGenerator } = require('../utils/jwtgenerator'); */

const logUser = async (request, response) => {
  try {
    const {
      username,
      password
    } = request.body;
    const user = await _database.default.query(_Queries.getUsername, [username]);
    if (user.rows.length === 0) {
      return response.status(401).json({
        usernameError: "Nom d'utilisateur incorrect"
      });
    }
    const usersPassword = await _bcrypt.default.compare(password, user.rows[0].users_password);
    if (!usersPassword) {
      return response.status(401).json({
        passwordError: "Mot de passe incorrect"
      });
    }
    const token = (0, _jwtgenerator.tokenGenerator)(user.rows[0].users_id, user.rows[0].users_role, username);
    response.cookie('accesstoken', token.accessToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none",
      maxAge: 10 * 60 * 1000
    });
    response.cookie('refreshtoken', token.refreshToken, {
      httpOnly: true,
      secure: true,
      sameSite: "none"
    });
    response.status(200).send({
      users_role: user.rows[0].users_role
    });
  } catch (error) {
    response.status(401).json({
      error: error.message
    });
  }
};
exports.logUser = logUser;