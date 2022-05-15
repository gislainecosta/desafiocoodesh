exports.up = knex => knex.schema.createTable('locals', table => {
  table.uuid('id').primary()
  table.string('local_name', 255).unique().notNullable()
  table.text('address',).unique().notNullable()

  table.integer('company_id')
    .references('companies.id')
    .onDelete('CASCADE')
    .notNullable()

  table.integer('admin_id')
    .references('accountables.id')
    .onDelete('CASCADE')
    .notNullable()
})

exports.down = knex => knex.schema.dropTable('locals')