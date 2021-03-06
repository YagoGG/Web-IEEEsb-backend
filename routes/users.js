const { Router } = require('express');

const router = Router();

router.route('/users/')
	.get(usersController.getUsers)
	.post(usersController.createUser);
router.route('/users/:id')
	.get(usersController.getUsers)
	.put(usersController.modifyUser)
	.delete(usersController.deleteUser);

export default router;
