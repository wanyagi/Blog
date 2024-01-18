const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    client_encoding: process.env.CODE,
    DATABASE_USER: process.env.USER, 
    DATABASE_PASSWORD: process.env.PASSWORD,
    DATABASE_HOST: process.env.HOST, 
    DATABASE_PORT: process.env.PORT,
    DATABASE: process.env.DATABASE
}); 

module.exports = pool; 