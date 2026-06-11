const bcrypt = require('bcrypt');

async function hashPassword() {

    const password = 'mysecretpassword';

    const saltRounds = 10;

    try {

        const hashedPassword = await bcrypt.hash(password, saltRounds);

        console.log('Hashed Password:', hashedPassword);

    } catch (error) {

        console.log(error);

    }

}

hashPassword();