exports.up = knex => knex.schema.createTable('users', table => {
  table.uuid('id').primary().unique().notNullable()
  table.string('username', 255).unique().notNullable()
  table.text('password',).unique().notNullable()
})

exports.down = knex => knex.schema.dropTable('users')