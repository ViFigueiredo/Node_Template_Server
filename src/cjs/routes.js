const express = require('express');
const router = express.Router();
const HomeController = require('./controllers/HomeController');
const UsersController = require('./controllers/UsersController');
const AuthAdmin = require('./middlewares/AdminAuth');

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
