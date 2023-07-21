import knex from '../../knexfile';

class PasswordToken {
  /* CRIAÇÃO DO TOKEN */
  async create(email) {
    try {
      const user = await this.findByEmail(email);
      // console.log(user);
      if (user) {
        const token = Date.now();
        await knex
          .insert({
            user_id: user[0].id,
            used: 0,
            token,
          })
          .table('pwd_tokens');
        return {
          status: true,
          token,
        };
      }
      return {
        status: false,
        err: 'E-mail inexistente!',
      };
    } catch (err) {
      return {
        status: false,
        err,
      };
    }
  }

  /* VALIDAÇÃO DO TOKEN */
  async validate(token) {
    try {
      const result = await knex.select().where({ token }).table('pwd_tokens');
      if (result.length > 0) {
        const tk = result[0];
        if (tk.used) {
          return {
            status: false,
            err: 'Token já utilizado!',
          };
        }
        return { status: true, token: tk };
      }
      return {
        status: false,
        err: 'Token inválido!',
      };
    } catch (err) {
      return {
        status: false,
        err,
      };
    }
  }

  /* SETA O TOKEN COMO UTILIZADO */
  async setUsed(token) {
    try {
      return await knex.update({ used: 1 }).where({ token }).table('pwd_tokens');
    } catch (err) {
      return {
        status: false,
        err,
      };
    }
  }

  async findByEmail(email) {
    try {
      const result = await knex
        .select(['id', 'email', 'password', 'name', 'role'])
        .from('users')
        .where({ email });
      if (result.length > 0) return result;
      return false;
    } catch (error) {
      return false;
    }
  }
}

module.exports = new PasswordToken();
