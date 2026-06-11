const jwt = require('jsonwebtoken');
require('dotenv').config();

const token = jwt.sign(
    {
        id: 1,
        email: 'user@example.com'
    },
    process.env.JWT_SECRET,
    {
        expiresIn: '1h'
    }
);

console.log('Generated JWT Token:');
console.log(token);