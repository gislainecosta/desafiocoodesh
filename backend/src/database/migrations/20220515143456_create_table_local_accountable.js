exports.up = knex => knex.schema.createTable('local_accountable', table => {
  table.increments('id').primary()

  table.uuid('local_id')
    .references('locals.id')
    .onDelete('CASCADE')
    .notNullable()

  table.integer('accountable_id')
    .references('accountables.id')
    .onDelete('CASCADE')
    .notNullable()
})

exports.down = knex => knex.schema.dropTable('local_accountable')