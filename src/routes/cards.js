const router = require('express').Router({ mergeParams: true })
const controllers = require('../controllers/cards')
const authController = require('../controllers/auth')

router.get('/:card_id', authController.userAuthenticated, authController.isSelf,controllers.getOne)
router.get('/', authController.userAuthenticated, authController.isSelf,controllers.getAll)
router.post('/add', authController.userAuthenticated, authController.isSelf,controllers.create)
router.delete('/:card_id/remove', authController.userAuthenticated, authController.isSelf,controllers.remove)
router.patch('/:card_id/add', authController.userAuthenticated, authController.isSelf,controllers.incrementQty)
router.patch('/:card_id/remove', authController.userAuthenticated, authController.isSelf,controllers.decrementQty)

module.exports = router
