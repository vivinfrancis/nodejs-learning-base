const mysql = require('mysql2/promise');

async function deleteUser() {

    const connection =
        await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '',
            database: 'learning_mysql'
        });

    const [result] =
        await connection.execute(
            `
            DELETE FROM users
            WHERE email = ?
            `,
            ['vivin@gmail.com']
        );

    console.log(result);

    await connection.end();
}

deleteUser();