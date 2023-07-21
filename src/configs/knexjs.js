import knex from 'knex';
import knexfile from '../../knexfile';

const knexInstance = knex(knexfile.development);

module.exports = knexInstance;
