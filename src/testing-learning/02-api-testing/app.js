const { name } = require('ejs');
const express = require('express');
const app = express();
const PORT = 3000;

app.get('/users', (req, res) => {
    res.status(200).json({ id:1, name: 'Vivin' });
});
app.post('/users', (req, res) => {

    res.status(201).json({
        message: 'User Created'
    });

});

module.exports = app;