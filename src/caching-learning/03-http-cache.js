const express = require('express');
const app = express();
const port = 3000;

app.get('/data', (req, res) => {
    
    const users = [
        { id: 1, name: 'Alice' },
        { id: 2, name: 'Bob' },
        { id: 3, name: 'Charliessss' }
    ];
    res.set('Cache-Control', 'public, max-age=60');
    res.json(users);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});