const mysql = require('mysql2/promise');

const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'learning_mysql',
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0
});

async function getUsers() {

    const [rows] =
        await pool.execute(
            'SELECT * FROM users'
        );

    console.table(rows);
}

getUsers();