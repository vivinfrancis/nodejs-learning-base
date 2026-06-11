const mysql = require('mysql2/promise');

async function createTable(){
    const connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'learning_mysql'
    });

    await connection.execute(`CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(100),
        email VARCHAR(100) UNIQUE,
        age INT,
        city VARCHAR(100))`);

    console.log('Table Created');
    await connection.end();
    
}

createTable();