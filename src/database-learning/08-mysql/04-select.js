const mysql = require('mysql2/promise');

async function getUsers() {

    const connection =
        await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'learning_mysql'
        });

    const [rows] =
        await connection.execute(
            'SELECT * FROM users'
        );

    console.table(rows);

    await connection.end();
}

getUsers();