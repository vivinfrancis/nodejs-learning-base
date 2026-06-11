const pool = require('./db');

async function insertUser() {
    try {

        const result = await pool.query(
            `INSERT INTO user_table (name, email, age, city) VALUES ($1, $2, $3, $4), ($5, $6, $7, $8) RETURNING *`,
            ['Vivin', 'vivin@gmail.com', 28, 'Tuticorin', 'Francis', 'francis@gmail.com', 50, 'Manapad']
        );

        console.log('User Inserted');

        console.log(result.rows);

    } catch (error) {

        console.log(error);

    }
};

insertUser();