"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var _pg = _interopRequireDefault(require("pg"));
var _dotenv = _interopRequireDefault(require("dotenv"));
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/*const Pool = require("pg").Pool; 
require('dotenv').config(); */

//import { Pool } from 'pg'; 

const {
  Pool
} = _pg.default;
_dotenv.default.config();

/*const pool = new Pool({
    client_encoding: process.env.DB_CODE, 
    connectionString: process.env.CONNECTIONSTRING,
    ssl: true,
}); */

const pool = new Pool({
  user: process.env.USERDEV,
  host: process.env.DEVHOST,
  database: process.env.DEVDB,
  password: process.env.DEVPASSWORD,
  port: process.env.DEVPORT
});
var _default = exports.default = pool;