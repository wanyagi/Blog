const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    client_encoding: process.env.CODE,
    DB_URL: process.env.EXTERNAL_DB_RENDER_URL,
}); 

module.exports = pool; 