const Pool = require("pg").Pool; 
require('dotenv').config(); 

const pool = new Pool({
    client_encoding: process.env.CODE,
    user: process.env.USER, 
    password: process.env.PASSWORD,
    host: process.env.HOST, 
    port: process.env.PORT,
    database: process.env.DATABASE
}); 

/*const poolConfig = process.env.DATABASE_URL ? {connectionString: process.env.DATABASE_URL, ssl: {rejectUnauthorized: false}} : localPool; 

const pool = new Pool(poolConfig); */

module.exports = pool; 