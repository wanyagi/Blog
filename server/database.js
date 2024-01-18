const Pool = require("pg").Pool; 
require('dotenv').config(); 


const pool = new Pool({
    client_encoding: process.env.CODE,
    DATABASE_URL: process.env.DATABASE_URL_RENDER, 
    DATABASE_USER: process.env.DATABASE_USER_RENDER, 
    DATABASE_PASSWORD: process.env.DATABASE_PASSWORD_RENDER, 
    DATABASE_HOST: process.env.DATABASE_HOST_RENDER, 
    DATABASE_PORT: process.env.DATABASE_PORT_RENDER, 
    DATABASE_NAME: process.env.DATABASE_RENDER, 
}); 

module.exports = pool; 