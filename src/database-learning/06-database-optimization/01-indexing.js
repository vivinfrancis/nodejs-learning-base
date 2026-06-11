const pool = require('../04-postgresql/db');

async function createIndex() {

    await pool.query(`
        CREATE INDEX IF NOT EXISTS
        idx_users_email
        ON users(email)
    `);

    console.log('Index Created');
}

createIndex();