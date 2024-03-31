const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController');



// Routes for user management
router.post('/users', UserController.createUser);
router.get('/users', UserController.getAllUsers);
router.post('/users/:id', UserController.updateUser);
router.delete('/users/:id', UserController.deleteUser);

module.exports = router;
