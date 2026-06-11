const bcrypt = require('bcrypt');

async function comparePassword() {

    const password = 'mysecretpassword';

    const hashedPassword = '$2b$10$Xj0J3G4lkKJLzC2Wksh/9epxXrst/rd6IpPbsQ5q5NeDywI.oJAQq';

    try {

        const isMatch = await bcrypt.compare(password, hashedPassword);

        if (isMatch) {
            console.log('Password is correct');
        } else {
            console.log('Password is incorrect');
        }

    } catch (error) {

        console.log(error);

    }

}

comparePassword();