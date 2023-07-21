module.exports = {
  development: {
    client: 'mssql',
    connection: {
      host: '192.168.0.200',
      port: 1433,
      user: 'dbAdmin',
      password: 'Ctelecom2017',
      database: 'db_dev_test',
    },
    migrations: {
      directory: './src/migrations/', // Diretório onde as migrações serão armazenadas
    },
  },
};
