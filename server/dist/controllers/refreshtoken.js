"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.refreshTheToken = exports.deleteToken = void 0;
var _jwtgenerator = require("../utils/jwtgenerator.js");
var _jsonwebtoken = _interopRequireDefault(require("jsonwebtoken"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const { tokenGenerator } = require('../utils/jwtgenerator'); 
const jwt = require('jsonwebtoken'); */

const refreshTheToken = (request, response) => {
  const refreshToken = request.cookies.refreshtoken;
  try {
    if (!refreshToken) return response.status(401).json({
      message: "Token expired"
    });
    _jsonwebtoken.default.verify(refreshToken, process.env.REFRESHTOKEN_KEY, (error, decoded) => {
      if (error) return response.status(401).json({
        error: error.message
      });
      const {
        userid,
        role,
        user
      } = decoded.user;
      let token = (0, _jwtgenerator.tokenGenerator)(userid, role, user);
      response.cookie('accesstoken', token.accessToken, {
        httpOnly: true,
        secure: true,
        sameSite: "none"
      });
      response.status(200).json({
        message: "Token refreshed successfully",
        token
      });
    });
  } catch (error) {
    response.status(401).json({
      error: error.message
    });
  }
  ;
};
exports.refreshTheToken = refreshTheToken;
const deleteToken = (request, response) => {
  try {
    response.clearCookie('refreshtoken');
    response.clearCookie('accesstoken');
    return response.status(200).json({
      message: 'token deleted'
    });
  } catch (error) {
    response.status(401).json({
      error: error.message
    });
  }
};
exports.deleteToken = deleteToken;