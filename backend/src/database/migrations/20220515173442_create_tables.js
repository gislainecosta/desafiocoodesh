exports.up = function (knex) {
  return knex.schema
    .createTable('accountables', table => {
      table.increments('id').primary()
      table.string('name', 255).unique().notNullable()
      table.text('address').unique().notNullable()
      table.text('phone').unique().notNullable()
    })
    .createTable('companies', table => {
      table.increments('id').primary()
      table.string('company_name', 255).unique().notNullable()
      table.string('cnpj', 255).unique().notNullable()
      table.text('company_description').unique().notNullable()
      table.integer('company_admin')
        .references('accountables.id')
        .onDelete('CASCADE')
        .notNullable()
    })
    .createTable('users', table => {
      table.uuid('id').primary().unique().notNullable()
      table.string('username', 255).unique().notNullable()
      table.text('password',).unique().notNullable()
    })
    .createTable('locals', table => {
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
    .createTable('company_accountable', table => {
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
    .createTable('local_accountable', table => {
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
    .createTable('tickets', table => {
      table.uuid('id').primary()
      table.string('title', 255)
        .unique()
        .notNullable()
      table.timestamp('created_at')
        .defaultTo(knex.fn.now())
        .notNullable()
      table.timestamp('updated_at')
      table.uuid('author')
        .references('users.id')
        .onDelete('CASCADE')
        .notNullable()
      table.uuid('ticket_user_admin')
        .references('users.id')
        .onDelete('CASCADE')
        .notNullable()
      table.enum('status', ['PENDENTE', 'PROGRESSO', 'CONCLUÍDO'])
        .defaultTo('PENDENTE')
        .notNullable()
      table.uuid('local_id')
        .references('locals.id')
        .onDelete('CASCADE')
        .notNullable()
      table.string('local_name', 255)
        .unique()
        .notNullable()
      table.text('address',)
        .unique()
        .notNullable()
      table.integer('local_company')
        .references('companies.id')
        .onDelete('CASCADE')
        .notNullable()
      table.integer('local_admin')
        .references('accountables.id')
        .onDelete('CASCADE')
        .notNullable()
    })
}

exports.down = function (knex) {
  return knex.schema
    .dropTable('accountables')
    .dropTable('companies')
    .dropTable('users')
    .dropTable('locals')
    .dropTable('company_accountable')
    .dropTable('local_accountable')
    .dropTable('tickets')
}