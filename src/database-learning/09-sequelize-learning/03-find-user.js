const User = require('./models/User');

async function findUser() {
    try {
        const user = await User.findAll();

        console.log(user.map(u => u.toJSON()));
    }
    catch (error) {
        console.error('Error finding user:', error.message);
    }
}

findUser();