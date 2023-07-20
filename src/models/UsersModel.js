import { database, DataTypes } from '../configs/sequelize';

const Users = database.define('user', {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [3, 255],
        msg: 'Campo nome deve ter entre 3 e 255 caracteres',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: {
      msg: 'Email já existe',
    },
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: {
        args: [6, 50],
        msg: 'A senha precisa ter entre 6 e 50 caracteres',
      },
    },
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: true,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
    defaultValue: 0,
  },
});

// Users.sync({ force: true })
//   .then(() => { console.log('Sincronizado com sucesso!'); })
//   .catch((err) => console.log(err));

module.exports = Users;
