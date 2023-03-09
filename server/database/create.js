require('dotenv').config();
const { Client } = require('pg');

const createDatabase = async () => {
  const { DB_HOST, DB_NAME, DB_PASSWORD, DB_PORT, DB_USER } = process.env;

  const client = new Client({
    user: DB_USER,
    host: DB_HOST,
    database: 'postgres',
    password: DB_PASSWORD,
    port: DB_PORT
  });

  console.log('Connecting to database "postgres"...');

  try {
    await client.connect();
  } catch (error) {
    throw new Error(error.message);
  }

  console.log('Creating database ' + DB_NAME + '...');

  const query = `CREATE DATABASE ${DB_NAME}`;

  client.query(query, (error, response) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log('Created database ' + DB_NAME);
    }

    client.end();
  });
};

createDatabase();
