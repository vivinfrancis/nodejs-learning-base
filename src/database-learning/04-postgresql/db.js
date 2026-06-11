const { Pool } = require('pg');

const pool = new Pool({
    user: 'dbadmin',
    host: 'localhost',
    database: 'learning_db',
    password: '',
    port: 5432
});

module.exports = pool;