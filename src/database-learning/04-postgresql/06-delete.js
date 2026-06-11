const pool = require('./db');

async function deleteUser() {

    try {

        const result = await pool.query(
            `
            DELETE FROM user_table
            WHERE id = $1
            RETURNING *
            `,
            [1]
        );

        console.log(result.rows);

    } catch (error) {

        console.log(error);

    }

}

deleteUser();