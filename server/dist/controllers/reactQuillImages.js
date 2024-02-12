"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.reactQuillImages = void 0;
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
//require('dotenv').config();

_dotenv.default.config();
const reactQuillImages = (request, response) => {
  if (!request.file) {
    return response.status(400).send('No image file uploaded.');
  }
  ;
  const protocol = /*process.env.PROTOCOL || */'http';
  const imageUrl = "".concat(protocol, "://").concat(request.get('host'), "/uploads/").concat(request.file.filename);
  response.json({
    imageUrl
  });
};
exports.reactQuillImages = reactQuillImages;