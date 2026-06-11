const mongoose = require('mongoose');
const User = require('./model/User');

async function createUser() {

    try {

        await mongoose.connect(
            'mongodb://127.0.0.1:27017/learning_db'
        );

        const user = await User.find({
            name: 'Vivin',
            email: 'vivin@gmail.com',
            age: 28,
            city: 'Tuticorin'
        });

        console.log('User Created');
        console.log(user);

    } catch (error) {

        console.log(error.message);

    } finally {

        await mongoose.disconnect();

    }

}

createUser();