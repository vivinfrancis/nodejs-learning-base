const pool = require('./db');

async function getUsers() {

    try {

        const result = await pool.query(
            'SELECT * FROM user_table WHERE id = $1',
            [1]
        );

        console.log(result.rows);

    } catch (error) {

        console.log(error);

    }

}

getUsers();