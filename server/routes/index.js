const Router = require('express'),
      router = new Router(),
      userRouter = require('./userRouter')

router.use('/user', userRouter)

module.exports = router