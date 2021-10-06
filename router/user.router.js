const router = require('express').Router();
const { userController } = require('../controller');


router.get('/', userController.getUsers);
router.get('/:userId', userController.getUserById);
router.post('/',  userController.createUser);
router.delete('/:userId', userController.deleteUserById);


module.exports = router;
