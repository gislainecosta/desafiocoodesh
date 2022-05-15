exports.up = knex => knex.schema.createTable('companies', table => {
  table.increments('id').primary()
  table.string('company_name', 255).unique().notNullable()
  table.string('cnpj', 255).unique().notNullable()
  table.text('company_description').unique().notNullable()
  table.text('company_description').unique().notNullable()
  table.integer('company_admin')
    .references('accountables.id')
    .onDelete('CASCADE')
    .notNullable()
})

exports.down = knex => knex.schema.dropTable('companies')