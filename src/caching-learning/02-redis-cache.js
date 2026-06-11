const express = require('express');
const redis = require('redis');

const app = express();
const port = 3000;

// Create a Redis client
const client = redis.createClient();

client.on('error', (err) => {
  console.error('Redis error:', err);
});

(async () => {
  await client.connect();
})();

app.get('/data', async (req, res) => {

    const cachedUsers = await client.get('users');
    
    if (cachedUsers) {
        console.log('Data retrieved from Redis cache');
        return res.json(JSON.parse(cachedUsers));
    }

    console.log('Data retrieved from database');
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charlie' }
    ];

    await client.set('users', JSON.stringify(users), {
        EX: 60
    });

    res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});