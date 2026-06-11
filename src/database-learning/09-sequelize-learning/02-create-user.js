const sequalize = require('./config/database');
const User = require('./models/User');

async function createUser() {
    try{
        await sequalize.sync();
        console.log('Database synced successfully');

        const user = await User.create({
            name: 'Vivin',
            email: 'vivin@gmail.com',
            age: 28,
            city: 'Tuticorin'
        });

        console.log('User created successfully:', user.toJSON());
    } catch (error) {
        console.error('Error creating user:', error.message);
    }
}

createUser();