exports.up = knex => knex.schema.createTable('accountables', table => {
  table.increments('id').primary()
  table.string('name', 255).unique().notNullable()
  table.text('address').unique().notNullable()
})

exports.down = knex => knex.schema.dropTable('accountables')