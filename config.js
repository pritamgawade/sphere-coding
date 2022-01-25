process.env.NODE_ENV = process.env.NODE_ENV || 'development';

require('dotenv').config({ path: `.env.${process.env.NODE_ENV}` });

const convict = require('convict');

const config = convict({
  env: {
    doc: 'The application environment',
    format: ['production', 'staging', 'development'],
    default: 'development',
    env: 'NODE_ENV',
  },
  port: {
    doc: 'The port the engine runs on',
    format: Number,
    default: 4000,
    env: 'PORT',
  },
  db: {
    port: {
      doc: 'Port on which db is running',
      format: Number,
      default: 5432,
      env: 'DB_PORT',
    },
    host: {
      doc: 'Host on which db is running',
      format: String,
      default: '127.0.0.1',
      env: 'DB_HOST',
    },
    user: {
      doc: 'Username for the db',
      format: String,
      default: '',
      env: 'DB_USER',
    },
    password: {
      doc: 'Password for the db',
      format: String,
      default: '',
      env: 'DB_PASS',
    },
    database: {
      doc: 'Db name',
      format: String,
      default: '',
      env: 'DB_NAME',
    },
  },
});

config.validate({ allowed: 'strict' });

module.exports = config;

