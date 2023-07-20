import Service from '../services/UsersServices';

class UsersController {
  async create(req, res) {
    const { name, email, password, role, status } = req.body;

    try {
      if (email == undefined || email.length < 0) {
        res.status(406);
        return res.json({ err: 'E-mail inválido!' });
      }

      const emailExists = await Service.findEmail(email);
      if (emailExists) {
        res.status(406);
        return res.json({ err: 'E-mail existente!' });
      }

      const emailValido = await Service.isEmail(email);
      if (!emailValido) {
        res.status(406);
        return res.json({ err: 'E-mail inválido!' });
      }

      const user = await Service.new(email, password, name, role, status);
      return res.json(user);
    } catch (err) {
      throw err;
    }
  }

  async list(req, res) {
    try {
      const users = await Service.findAll();
      if (!users) {
        res.status(404);
        return res.json({ err: 'Usuários não cadastrados!' });
      }
      return res.json(users);
    } catch (err) {
      throw err;
    }
  }

  async listOne(req, res) {
    try {
      const { id } = req.params;
      const user = await Service.findById(id);
      if (!user) {
        res.status(404);
        return res.json({ err: 'Usuário inexistente!' });
      }
      return res.json({ user });
    } catch (err) {
      throw err;
    }
  }

  async edit(req, res) {
    const { id, email, password, name, role, status } = req.body;

    const user = await Service.update(id, email, password, name, role, status);

    if (user != undefined) {
      if (user.status) {
        return res.json(user);
      }
      res.status(406);
      return res.send(user.err);
    }
    res.status(406);
    return res.send('Ocorreu um erro no servidor!');
  }

  async remove(req, res) {
    const { id } = req.params;
    const result = await Service.delete(id);
    if (result.status) return res.json(result.msg);
    res.status(406);
    return res.json(result.err);
  }
}

module.exports = new UsersController();
