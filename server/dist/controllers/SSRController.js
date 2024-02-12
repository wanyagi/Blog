"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ssrControl = void 0;
var _react = _interopRequireDefault(require("react"));
var _path = _interopRequireDefault(require("path"));
var _fs = _interopRequireDefault(require("fs"));
var _server = _interopRequireDefault(require("react-dom/server"));
var _server2 = require("react-router-dom/server");
var _App = _interopRequireDefault(require("../../client/src/App"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
const ssrControl = (request, response) => {
  const html = _server.default.renderToString( /*#__PURE__*/_react.default.createElement(_server2.StaticRouter, {
    location: request.url
  }, /*#__PURE__*/_react.default.createElement(_App.default, null)));
  const templateFile = _path.default.resolve('./build/index.html');
  _fs.default.readFile(templateFile, 'utf-8', (error, data) => {
    if (error) {
      return response.status(500).send({
        "error": error.message
      });
    } else {
      return response.send(data.replace('<div id="root"></div>', "<div id=\"root\">".concat(html, "<div>")));
    }
  });
};
exports.ssrControl = ssrControl;