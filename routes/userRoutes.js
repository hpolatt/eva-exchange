const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');

router.post('/create', UserController.createUser);
router.get('/', UserController.getAllUsers);

module.exports = router;
