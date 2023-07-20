import { Router } from 'express';
import HomeController from './controllers/HomeController';
import UsersController from './controllers/UsersController';
import AuthAdmin from './middlewares/AdminAuth';

const router = new Router();

router.get('/', HomeController.index);
router.get('/users', AuthAdmin, UsersController.indexUsers);
router.get('/users/:id', AuthAdmin, UsersController.userId);
router.post('/users', AuthAdmin, UsersController.createUser);
router.post('/auth/recoverpwd', UsersController.recoverPwd);
router.post('/auth/changepwd', UsersController.changePwd);
router.post('/auth/login', UsersController.login);
router.post('/validate', AuthAdmin, UsersController.validate);
router.put('/users', AuthAdmin, UsersController.editUser);
router.delete('/users/:id', AuthAdmin, UsersController.removeUser);

module.exports = router;
