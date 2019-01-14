const router = require('express').Router({ mergeParams: true })
const controllers = require('../controllers/cards')

router.get('/:card_id', controllers.getOne)
router.get('/', controllers.getAll)
router.post('/add', controllers.create)
router.patch('/:card_id/add', controllers.incrementQty)
router.patch('/:card_id/remove', controllers.decrementQty)

module.exports = router
