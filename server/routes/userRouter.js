const Router = require('express'),
      userController = require('../controllers/userController');
const router = new Router();

router.post('/registration', userController.registration)
router.post('/login', userController.login)
router.get('/select', userController.selectAll)
router.get('/auth', userController.check)

module.exports = router