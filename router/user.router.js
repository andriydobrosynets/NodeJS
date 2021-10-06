const router = require('express').Router();
const { userController } = require('../controller');

router.get('/', userController.getUsers);
router.post('/',  userController.createUser);

router.get('/:userId', userController.getUserById);
router.delete('/:userId', userController.deleteUserById);

module.exports = router;
