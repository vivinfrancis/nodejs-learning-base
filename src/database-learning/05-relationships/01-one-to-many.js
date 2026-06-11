const pool = require('../04-postgresql/db');

async function createTables() {

    try {

        await pool.query(
            `
            CREATE TABLE IF NOT EXISTS customers (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL
            )
            `
        );

        await pool.query(
            `
            CREATE TABLE IF NOT EXISTS orders (
                id SERIAL PRIMARY KEY,
                product VARCHAR(100) NOT NULL,
                price DECIMAL(10, 2) NOT NULL,
                customer_id INT,
                FOREIGN KEY (customer_id) REFERENCES customers(id)
            )
            `
        );

        console.log('Tables Created');

    } catch (error) {

        console.log(error);

    }

}

createTables();