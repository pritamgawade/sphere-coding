// Update with your config settings.
const dbConfig = {
    client: 'postgresql',
    connection: {
      database: 'test',
      user:     'testuser',
      password: 'testpassword'
    },
    pool: {
      min: 2,
      max: 10
    },
    seeds: {
      directory: './db/seeds'
    },
    migrations: {
      directory: './db/migrations',
      tableName: 'knex_migrations'
    }
};

module.exports = {
  development: dbConfig, staging: dbConfig, production: dbConfig
};
