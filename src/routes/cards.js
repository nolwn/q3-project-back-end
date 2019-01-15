const router = require('express').Router({ mergeParams: true })
const controllers = require('../controllers/cards')

router.get('/:card_id', controllers.getOne)
router.get('/', controllers.getAll)
router.post('/create', controllers.create)

module.exports = router
