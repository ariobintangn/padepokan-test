const TransactionController = require('../controllers/TransactionController')
const router = require('express').Router()

router.get('/', TransactionController.transactions);
router.post('/', TransactionController.createTransaction);

module.exports = router