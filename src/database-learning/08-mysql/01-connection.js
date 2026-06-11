const mysql = require('mysql2/promise');

async function connectDB() {

    try {

        const connection =
            await mysql.createConnection({
                host: 'localhost',
                user: 'root',
                password: '',
                database: 'learning_mysql'
            });

        console.log('MySQL Connected');

        await connection.end();

    } catch (error) {

        console.error(error.message);

    }
}

connectDB();