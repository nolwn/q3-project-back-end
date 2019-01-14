const router = require('express').Router({ mergeParams: true })
const controllers = require('../controllers/cards')

router.use('/', controllers.getAll)
router.use('/:card_id', controllers.getOne)
router.use('/create', controllers.create)

module.exports = router
