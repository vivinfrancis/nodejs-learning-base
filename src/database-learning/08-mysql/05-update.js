const mysql = require('mysql2/promise');

async function updateUser() {

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
            UPDATE users
            SET city = ?
            WHERE email = ?
            `,
            [
                'Chennai',
                'vivin@gmail.com'
            ]
        );

    console.log(result);

    await connection.end();
}

updateUser();