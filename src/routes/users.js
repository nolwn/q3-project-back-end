const express = require('express');

const router = express.Router({mergeParams: true});
const userController = require('../controllers/users');
const authController = require('../controllers/auth')

router.post('/', userController.createUser);
router.get('/', authController.userAuthenticated, authController.isSelf, userController.getAllUsers)
router.get('/:user_id', authController.userAuthenticated, authController.isSelf, userController.getUser);
router.delete('/:user_id', userController.deleteUser);

module.exports = router