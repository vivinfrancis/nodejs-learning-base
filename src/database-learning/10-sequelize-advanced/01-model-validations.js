const sequalize = require('./config/database');
const User = require('./models/User');

async function createUser() {
    try{
        await sequalize.sync();
        console.log('Database synced successfully');

        const user = await User.create({
            name: '',
            email: 'vivin',
            age: 8,
            city: 'Tuticorin'
        });

        console.log('User created successfully:', user.toJSON());
    } catch (error) {
        error.errors.forEach((err) => {
            console.error(`Validation error for ${err.path}: ${err.message}`);
        });
    }
}

createUser();