/*const Pool = require("pg").Pool; 
require('dotenv').config(); */

//import { Pool } from 'pg'; 
import pkg from 'pg';
const { Pool } = pkg;
import dotenv from 'dotenv'; 
dotenv.config(); 


/*const pool = new Pool({
    client_encoding: process.env.DB_CODE, 
    connectionString: process.env.CONNECTIONSTRING,
    ssl: true,
}); */

const pool = new Pool({
    user: process.env.USERDEV,
    host: process.env.DEVHOST,
    database: process.env.DEVDB,
    password: process.env.DEVPASSWORD,
    port: process.env.DEVPORT, 
}); 

export default pool; 