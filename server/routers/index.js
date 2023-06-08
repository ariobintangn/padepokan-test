const router = require('express').Router();
const CustomerRouter = require('./CustomerRouter')
const TransactionRouter = require('./TransactionRouter')

router.use('/customers', CustomerRouter)
router.use('/transactions', TransactionRouter)

module.exports = router;