import { database, DataTypes } from '../configs/sequelize';

const Users = database.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  role: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Users.sync({ force: true })
//   .then(() => { console.log('Sincronizado com sucesso!'); })
//   .catch((err) => console.log(err));

module.exports = Users;
