const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    client_encoding: process.env.DB_CODE, 
    connectionString: process.env.CONNECTIONSTRING,
    ssl: true,
}); 

module.exports = pool; 