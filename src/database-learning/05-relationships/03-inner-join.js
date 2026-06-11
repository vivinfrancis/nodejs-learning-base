const pool = require('../04-postgresql/db');

async function getOrders() {
    try {

        const result = await pool.query(
            `
            SELECT
        customers.name,
        orders.product
      FROM customers
      INNER JOIN orders
      ON customers.id = orders.customer_id
            `
        );

        console.log(result.rows);

    } catch (error) {

        console.log(error);

    }
};

getOrders();