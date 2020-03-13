const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'localhost',  
    user: 'postgres',  
    database: 'lab6',  
    password: '9312',
    port: 5432,
    ssl: false
});  

module.exports = pool;