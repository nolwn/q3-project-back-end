const express = require('express');
const router = express.Router({mergeParams: true});
const decksController = require('../controllers/decks');
console.log(decksController)

router.get('/', decksController.getAll);
router.get('/:deck_id', decksController.getDeck);

module.exports = router