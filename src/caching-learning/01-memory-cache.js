const express = require('express');
const app = express();
const PORT = 3000;

const cache = {};

app.get('/data', (req, res) => {
    const key = 'myData';

    if (cache[key]) {
        console.log('Serving from cache');
        return res.json({ data: cache[key], source: 'cache' });
    }

    console.log('Fetching fresh data');
    const freshData = { message: 'Hello, World!', timestamp: new Date() };
    cache[key] = freshData;

    res.json({ data: freshData, source: 'fresh' });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});