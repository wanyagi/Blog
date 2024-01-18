const Pool = require("pg").Pool; 
require('dotenv').config(); 

const pool = new Pool({
    connectionString: 'postgres://danielpostgres:4aRocU8HsBzmL9tmPKMC3dNn6BAjfxMV@dpg-cmj9ctocmk4c739nf950-a/blogsayfemums_t695'
}); 

module.exports = pool; 