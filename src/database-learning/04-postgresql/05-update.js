const pool = require('./db');

async function updateUser() {

    try {

        const result = await pool.query(
            `
            UPDATE user_table
            SET name = $1
            WHERE id = $2
            RETURNING *
            `,
            ['Vivin Francis', 1]
        );

        console.log(result.rows);

    } catch (error) {

        console.log(error);

    }

}

updateUser();