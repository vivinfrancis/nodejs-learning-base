const express = require('express');
const app = express();
require('dotenv').config();
const logger = require('./middleware/logger');
const auth = require('./middleware/auth');
const errorHandler = require('./middleware/errorHandler');
const morgan = require('morgan');

app.use(logger);
app.use(errorHandler);
app.use(express.json());
app.use(morgan('dev'));

app.post('/user', auth, (req, res) => {
    console.log(req.body);
    res.send('User data received');
});

app.get('/', (req, res) => {
    res.send('This is a public endpoint');
});

app.get('/error', (req, res, next) => {
    next(new Error('Something went wrongssss'));
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});