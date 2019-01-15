const express = require('express');
const router = express.Router({mergeParams: true});
const decksController = require('../controllers/decks');

router.get('/', decksController.getAll);
router.get('/:deck_id', decksController.getDeck);
router.post('/', decksController.create)
router.delete('/:deck_id', decksController.deleteDeck)

module.exports = router
