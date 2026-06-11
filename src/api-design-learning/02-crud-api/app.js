const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

let users = [];

app.get('/users', (req, res) => {
    res.json(users);
});

app.post('/users', (req, res) => {

    users.push(req.body);

    res.status(201).json({
        message: 'User Created'
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});