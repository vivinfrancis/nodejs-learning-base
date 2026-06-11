const pool = require('./db');

async function createTable() {

    try {

        const result = await pool.query(
            `CREATE TABLE IF NOT EXISTS user_table (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                age INT,
                city VARCHAR(100)
            )`
        );

        console.log('Table Created');

        console.log(result);

    } catch (error) {

        console.log(error);

    }

}

createTable();