const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/api/v1/users', (req, res) => {

    res.json({
        version: 'v1',
        users:[]
    });

});

app.get('/api/v2/users', (req, res) => {

    res.json({
        version: 'v2',
        users:[]
    });

});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});