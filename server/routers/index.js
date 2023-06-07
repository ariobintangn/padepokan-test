const router = require('express').Router();
const CustomerRouter = require('./CustomerRouter')

router.use('/customers', CustomerRouter)



module.exports = router;