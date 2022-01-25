// Update with your config settings.

module.exports = {

  development: {
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
  },

  staging: {
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
  },

  production: {
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
  }

};
