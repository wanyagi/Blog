const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    /*host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_NAME,
    user: process.env.DB_USERNAME, 
    password: process.env.DB_PASSWORD, */
    client_encoding: process.env.DB_CODE, 
    connectionString: process.env.CONNECTIONSTRING,
    ssl: true,
}); 

module.exports = pool; 