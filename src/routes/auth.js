const express = require('express')
const router = express.Router()
const authController = require('../controllers/auth')

router.get('/token', authController.userAuthenticated, authController.getAuthStatus);
router.post('/token', authController.login);

module.exports = router