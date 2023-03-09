require('dotenv').config();
const humps = require('humps');

const { DB_NAME, DB_USER, DB_PASSWORD, DB_PORT, DB_HOST } = process.env;

const knexConfig = {
  client: 'pg',
  connection: {
    database: DB_NAME,
    user: DB_USER,
    password: DB_PASSWORD,
    port: DB_PORT,
    host: DB_HOST,
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: __dirname + '/database/migrations'
  },
  seeds: {
    directory: __dirname + '/database/seeds'
  },
  postProcessResponse: (result) => {
    return humps.camelizeKeys(result);
  },
  wrapIdentifier: (value, origImpl) => {
    return origImpl(humps.decamelize(value));
  },
};

module.exports = {
  development: Object.assign(knexConfig, {
    debug: false
  }),
  production: Object.assign(knexConfig, {
    debug: false
  })
};
