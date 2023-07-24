import { Router } from 'express';
import upload from './configs/multer';
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

/* ROTA -> UPLOAD DE ARQUIVOS */
router.post('/upload', upload.array('files', 10), (req, res) => {
  res.send('Arquivo recebido...');
});

module.exports = router;
