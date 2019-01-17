const express = require('express');
const router = express.Router({mergeParams: true});
const decksController = require('../controllers/decks');
const authController = require('../controllers/auth')

router.get('/', authController.userAuthenticated, authController.isSelf, decksController.getAll);
router.get('/:deck_id', authController.userAuthenticated, authController.isSelf,  decksController.getDeck);
router.post('/', authController.userAuthenticated, authController.isSelf,  decksController.create);
router.delete('/:deck_id', authController.userAuthenticated, authController.isSelf,  decksController.deleteDeck);
router.put('/:deck_id', authController.userAuthenticated, authController.isSelf,  decksController.update)

module.exports = router
