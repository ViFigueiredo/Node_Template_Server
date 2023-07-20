import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import UsersService from '../services/UsersServices';
import PwdToken from '../services/PwdToken';

const secret = process.env.JWTSECRET;

class UsersController {
  async validate(req, res) {
    // next();
    return res.send('ok');
  }

  async login(req, res) {
    const { email, password } = req.body;

    const user = await PwdToken.findByEmail(email);

    if (user.length > 0) {
      const result = await bcrypt.compare(password, user[0].password);
      if (result) {
        const token = jwt.sign(
          {
            email: user[0].email,
            role: user[0].role,
          },
          secret,
          { expiresIn: '48h' }
        );

        res.status(200);
        return res.json({ token, role: user[0].role });
      }
      res.status(406);
      return res.json({ err: 'Senha incorreta!' });
    }
    res.status(406);
    return res.json({ err: 'Usuário não existe!' });
  }

  async changePwd(req, res) {
    const { token, password } = req.body;
    const isTokenValid = await PwdToken.validate(token);

    if (isTokenValid.status) {
      await UserService.changePassword(
        password,
        isTokenValid.token.user_id,
        isTokenValid.token.token
      );
      return res.send('Senha alterada!');
    }
    res.status(406);
    return res.send(isTokenValid.err);
  }

  async recoverPwd(req, res) {
    const { email } = req.body;

    const result = await PwdToken.create(email);
    if (result.status) {
      res.send(result.token.toString());

      // TODO
      /* envio de email do token */
      // NodeMailer.send();
    } else {
      res.status(406);
      res.send(result.err);
    }
  }
}

module.exports = new UsersController();
