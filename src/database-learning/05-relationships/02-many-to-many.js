const pool = require('../04-postgresql/db');

async function createTables() {

    try {

        await pool.query(
            `
            CREATE TABLE IF NOT EXISTS students (
                id SERIAL PRIMARY KEY,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL
            )
            `
        );

        await pool.query(
            `
            CREATE TABLE IF NOT EXISTS courses (
                id SERIAL PRIMARY KEY,
                title VARCHAR(100) NOT NULL,
                description TEXT
            )
            `
        );

        await pool.query(`CREATE TABLE IF NOT EXISTS student_courses (
            student_id INT, 
            course_id INT,

            FOREIGN KEY(student_id)
            REFERENCES students(id),

            FOREIGN KEY(course_id)
            REFERENCES courses(id))
            `)

        console.log('Tables Created');

    } catch (error) {

        console.log(error);

    }

}

createTables();