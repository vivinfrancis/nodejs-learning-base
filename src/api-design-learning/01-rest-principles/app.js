const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/users', (req, res) => {
    res.json({ message: 'Get all users' });
});

app.post('/users', (req, res) => {
    res.json({ message: 'Create a new user' });
});

app.put('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Update user with ID ${userId}` });
});

app.delete('/users/:id', (req, res) => {
    const userId = req.params.id;
    res.json({ message: `Delete user with ID ${userId}` });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});