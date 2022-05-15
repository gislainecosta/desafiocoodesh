module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: 'localhost',
      database: 'desafiocoodesh',
      user: 'postgres',
      password: 'admin',
      port: 5432
    },
    migrations: {
      tableName: 'knex_migrations',
      directory: './src/database/migrations'
    }
  }
}
