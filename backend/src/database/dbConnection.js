const { Pool } = require("pg");

// create a connection pool to the database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'insurance',
    password: 'dbPassword',
    port: 5432,
});

module.exports = pool;