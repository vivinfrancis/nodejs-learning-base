const sequalize = require('./config/database');

async function connectDB() {

    try {

        await sequalize.authenticate();

        console.log(
            'Database Connected Successfully'
        );

    } catch (error) {

        console.error(error.message);

    }

}

connectDB();