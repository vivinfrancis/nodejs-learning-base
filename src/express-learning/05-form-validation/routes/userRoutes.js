const express = require('express');

const { createUser } = require('../controllers/userController');
const {
  createUserValidation,
  handleValidationErrors
} = require('../middleware/validation');

const router = express.Router();

router.post('/', createUserValidation, handleValidationErrors, createUser);

module.exports = router;
