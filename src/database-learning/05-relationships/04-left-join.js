const pool = require('../04-postgresql/db');

async function getCustomers() {

    const result = await pool.query(`
        SELECT
            c.name,
            o.product
        FROM customers c
        LEFT JOIN orders o
        ON c.id = o.customer_id
    `);

    console.table(result.rows);
}

getCustomers();