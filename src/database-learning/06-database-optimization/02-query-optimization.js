const pool = require('../04-postgresql/db');

async function analyzeQuery() {

    const result = await pool.query(`
        EXPLAIN ANALYZE
SELECT *
FROM users
WHERE email = 'vivin@gmail.com';
    `);

    console.table(result.rows);

}

analyzeQuery();