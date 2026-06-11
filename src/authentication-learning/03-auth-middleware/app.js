const express = require('express');
const auth = require('./middleware/auth');

const app = express();

app.get(
    '/profile',
    auth,
    (req, res) => {

        res.json({
            message: 'Protected Route',
            user: req.user
        });

    }
);

app.listen(3000);