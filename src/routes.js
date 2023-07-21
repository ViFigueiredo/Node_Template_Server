import { Router } from 'express';
import HomeController from './controllers/HomeController';
import UsersController from './controllers/UsersController';

const router = new Router();

/* ROTAS -> API INDEX */
router.get('/', HomeController.index);

/* ROTAS -> API USUÁRIOS */
router.get('/users', UsersController.indexUsers);
router.get('/users/:id', UsersController.userId);
router.post('/users', UsersController.createUser);
router.put('/users', UsersController.editUser);
router.delete('/users/:id', UsersController.removeUser);
router.post('/auth/recoverpwd', UsersController.recoverPwd);
router.post('/auth/changepwd', UsersController.changePwd);
router.post('/auth/login', UsersController.login);
router.post('/validate', UsersController.validate);

module.exports = router;
