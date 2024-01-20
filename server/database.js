const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    host: process.env.HOST,
    port: process.env.DATABASE_PORT,
    database: process.env.DATABASE,
    user: process.env.DB_USERNAME, 
    password: process.env.PASSWORD, 
    client_encoding: process.env.CODE,
    ssl: true, 
}); 

module.exports = pool; 