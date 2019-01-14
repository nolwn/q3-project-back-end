const express = require('express');

const router = express.Router({mergeParams: true});
const userController = require('../controllers/users');

router.post('/', userController.createUser);
router.get('/', userController.getAllUsers)
router.get('/:user_id', userController.getUser);
router.delete('/:user_id', userController.deleteUser);

module.exports = router