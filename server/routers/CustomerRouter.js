const CustomerController = require('../controllers/CustomerController')
const router = require('express').Router()

router.get('/', CustomerController.users);
router.post('/', CustomerController.createUser);
router.put('/:id', CustomerController.updateUser);
router.delete('/:id', CustomerController.deleteUser)


module.exports = router