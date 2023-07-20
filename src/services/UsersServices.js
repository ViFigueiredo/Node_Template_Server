import bcrypt from 'bcrypt';
import validator from 'validator';
import PwdToken from './PwdToken';

class User {
  async new(email, password, name, role, status) {
    try {
      const hash = await bcrypt.hash(password, 10);

      return await knex
        .insert({
          email,
          password: hash,
          name,
          role,
          status,
        })
        .table('users');
    } catch (err) {
      return err;
    }
  }

  async findAll() {
    try {
      const result = await knex.select(['id', 'email', 'name', 'role', 'status']).from('users');
      if (result.length > 0) return result;
      return false;
    } catch (error) {
      return false;
    }
  }

  async findById(id) {
    try {
      const result = await knex
        .select(['id', 'email', 'password', 'name', 'role', 'status'])
        .where({ id })
        .from('users');
      if (result.length > 0) return result;
      return false;
    } catch (error) {
      return false;
    }
  }

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

  async delete(id) {
    try {
      const user = await this.findById(id);

      if (user) {
        await knex.delete().where({ id }).table('users');
        return { status: true };
      }
      return {
        status: false,
        err: 'Usuário inexistente!',
      };
    } catch (err) {
      return {
        status: false,
        err,
      };
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
            // console.log(result);
            if (result == false) {
              editUser.email = email;
            }
            // else {
            //   return { status: false, err: 'E-mail já cadastrado!' };
            // }
          }
        }

        if (password != undefined) editUser.password = password;
        if (name != undefined) editUser.name = name;
        if (role != undefined) editUser.role = role;
        if (status != undefined) editUser.status = status;

        await knex.update(editUser).where({ id }).table('users');
        return { status: true };
      }
      return { status: false, err: 'Usuário inexistente!' };
    } catch (err) {
      return { status: false, err };
    }
  }

  async findEmail(email) {
    try {
      const result = await knex.select('*').from('users').where({ email });
      if (result.length > 0) return true;
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
