import { Router } from 'express';
import HomeController from './controllers/HomeController';
import UsersController from './controllers/UsersController';
// import AuthController from './controllers/AuthController';
// import AuthAdmin from './middlewares/AdminAuth';

const router = new Router();

router.get('/', HomeController.index);

router.post('/users', UsersController.create);
router.get('/users', UsersController.list);
router.get('/users/:id', UsersController.listOne);
router.put('/users', UsersController.edit);
router.delete('/users/:id', UsersController.remove);

// router.post('/auth/recoverpwd', AuthController.recoverPwd);
// router.post('/auth/changepwd', AuthController.changePwd);
// router.post('/auth/login', AuthController.login);
// router.post('/validate', AuthAdmin, AuthController.validate);

module.exports = router;
