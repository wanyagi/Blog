const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    client_encoding: process.env.CODE,
    DATABASE_USER: process.env.USER,
    DATABASE_NAME: process.env.NAME,
    DATABASE_PASSWORD: process.env.PASSWORD,
    DATABASE_PORT: process.env.PORT,
    DATABASE_HOST: process.env.HOST,
}); 

module.exports = pool; 