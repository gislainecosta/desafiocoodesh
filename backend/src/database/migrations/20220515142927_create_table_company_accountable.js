exports.up = knex => knex.schema.createTable('company_accountable', table => {
  table.increments('id').primary()

  table.integer('company_id')
    .references('companies.id')
    .onDelete('CASCADE')
    .notNullable()

  table.integer('accountable_id')
    .references('accountables.id')
    .onDelete('CASCADE')
    .notNullable()
})

exports.down = knex => knex.schema.dropTable('company_accountable')