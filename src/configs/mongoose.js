const mongoose = require('mongoose');
const db = process.env.DB;
const user = process.env.DB_USER;
const pwd = process.env.DB_PWD;

mongoose
  .connect(`mongodb+srv://${user}:${pwd}@cluster0.ghxmtly.mongodb.net/${db}`)
  .then(/*() => console.log('[+][DB] -> Conectado com sucesso.')*/)
  .catch(() => console.log('[-][DB] -> Falha ao conectar.'));

module.exports = mongoose;
