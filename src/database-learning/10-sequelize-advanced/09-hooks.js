// i create hooks in the model file and then i will use them in the index.js file
// hooks are used to perform some actions before or after some events like create, update, delete etc.
// for example, i want to convert the name to uppercase before creating a user

const sequalize = require('../config/database');

async function run() {
    try{

        const user = await sequalize.models.User.create({
            name: 'John Doe',
            email: 'john.doe@example.com'
        });
        console.log('User created:', user.toJSON());
    }catch(error){
        console.error('Error occurred:', error.message);
    }
}