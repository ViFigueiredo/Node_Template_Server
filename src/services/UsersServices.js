import bcrypt from 'bcrypt';
import validator from 'validator';
import PwdToken from './PwdTokenServices';
import Model from '../models/UsersModel';

class User {
  async new(email, password, name, role = 0, status = 1) {
    try {
      const hash = await bcrypt.hash(password, 10);

      const result = await Model.create({
        email,
        password: hash,
        name,
        role,
        status,
      });
      return result;
    } catch (err) {
      throw err;
    }
  }

  async findAll() {
    try {
      const result = await Model.findAll();
      if (result.length > 0) return result;
      return false;
    } catch (err) {
      throw err;
    }
  }

  async findById(id) {
    try {
      const result = await Model.findByPk(id);
      if (result != undefined) return result;
      return false;
    } catch (err) {
      throw err;
    }
  }

  async update(id, email, password, name, role, status) {
    try {
      const user = await this.findById(id);
      if (user != undefined) {
        const editUser = {};

        if (email != undefined) {
          if (email != user.email) {
            const result = await this.findEmail(email);
            if (result == false) {
              editUser.email = email;
            } else {
              return { status: false, err: 'E-mail já cadastrado!' };
            }
          }
        }

        if (password != undefined) {
          const hash = await bcrypt.hash(password, 10);
          editUser.password = hash;
        }

        if (name != undefined) editUser.name = name;
        if (role != undefined) editUser.role = role;
        if (status != undefined) editUser.status = status;

        await Model.update(editUser, { where: { id } });
        return user;
      }
      return { status: false, err: 'Usuário inexistente!' };
    } catch (err) {
      throw err;
    }
  }

  async delete(id) {
    try {
      const user = await this.findById(id);

      if (user) {
        await Model.destroy({ where: { id } });
        return {
          status: true,
          msg: 'Removido com sucesso!',
        };
      }
      return {
        status: false,
        err: 'Usuário inexistente!',
      };
    } catch (err) {
      throw err;
    }
  }

  // TODO
  async changePassword(newPassword, id, token) {
    try {
      const hash = await bcrypt.hash(newPassword, 10);
      await knex.update({ password: hash }).where({ id }).table('users');
      return await PwdToken.setUsed(token);
    } catch (err) {
      return {
        status: false,
        err,
      };
    }
  }

  async findEmail(email) {
    try {
      const result = await Model.findOne({ where: { email } });
      if (result != undefined) return true;
      return false;
    } catch (err) {
      return err;
    }
  }

  async isEmail(email) {
    try {
      const result = await validator.isEmail(email);
      return result;
    } catch (err) {
      return err;
    }
  }
}

module.exports = new User();
