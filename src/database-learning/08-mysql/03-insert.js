const mysql = require('mysql2/promise');

async function insertUser() {

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
            INSERT INTO users
            (name, email, age, city)
            VALUES (?, ?, ?, ?)
            `,
            [
                'Vivin',
                'vivin@gmail.com',
                28,
                'Tuticorin'
            ]
        );

    console.log(result);

    await connection.end();
}

insertUser();