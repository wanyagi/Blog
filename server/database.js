const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    client_encoding: process.env.CODE,
    DB_HOST: process.env.HOST,
    DB_PORT: process.env.DATABASE_PORT,
    DB_NAME: process.env.DATABASE,
    DB_USERNAME: process.env.USERNAME, 
    DB_PASSWORD: process.env.PASSWORD, 
}); 
console.log(pool);

module.exports = pool; 