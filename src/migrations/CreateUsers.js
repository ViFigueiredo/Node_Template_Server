exports.up = (knex) =>
  knex.schema.createTable('users', (table) => {
    table.increments('id').primary();

    table.string('email').unsigned().notNullable().unique();
    table.string('name').notNullable();
    table.string('password').notNullable();
    table.integer('role').notNullable();
    table.integer('status').notNullable();

    table.timestamps(true, true);
  });

exports.down = (knex) => knex.schema.dropTableIfExists('users');
