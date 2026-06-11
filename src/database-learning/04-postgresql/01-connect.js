const pool = require('./db');

async function connectDB() {

    try {

        const result = await pool.query(
            'SELECT NOW()'
        );

        console.log('PostgreSQL Connected');

        console.log(result.rows);

    } catch (error) {

        console.log(error);

    }

}

connectDB();