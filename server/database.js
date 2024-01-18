const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    client_encoding: process.env.CODE,
    DATABASE_URL: process.env.DATABASE_URL_RENDER,
}); 

module.exports = pool; 