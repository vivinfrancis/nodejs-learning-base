const express = require('express');
const router = express.Router();
const { getUser, createUser, searchUser } = require('../controllers/userController');

router.post('/', createUser);

router.get('/', getUser);

router.get('/:id', (req, res) => {
    res.send(`Get user with ID: ${req.params.id}`);
});

router.get('/search', searchUser);
module.exports = router;