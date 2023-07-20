// config.js

const { DataTypes, Sequelize } = require('sequelize');
const dotenv = require('dotenv');

dotenv.config();

const host = process.env.DB_HOST;
const dialect = process.env.DB_DIALECT;
const db = process.env.DB;
const user = process.env.DB_USER;
const pwd = process.env.DB_PWD;
const instanceName = process.env.DB_INSTANCE;

const database = new Sequelize(db, user, pwd, {
  dialect,
  host,
  dialectOptions: {
    timezone: 'America/Recife',
    options: {
      encrypt: false,
      instanceName,
      //   "requestTimeout": 300000
    },
  },
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
});

module.exports = { database, DataTypes };
