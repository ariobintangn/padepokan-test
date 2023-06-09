const CustomerController = require('../controllers/CustomerController')
const router = require('express').Router()

router.get('/', CustomerController.customers);
router.post('/', CustomerController.createCustomer);
router.get('/time', CustomerController.customerTime);
router.delete('/:id', CustomerController.deleteUser)


module.exports = router