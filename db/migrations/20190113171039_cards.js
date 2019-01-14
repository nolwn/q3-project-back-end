exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards', table => {
    table.increments()
    table.string('name').notNullable()
    table.integer('red')notNullable().defaultsTo(0)
    table.integer('white').notNullable().defaultsTo(0)
    table.integer('blue').notNullable().defaultsTo(0)
    table.integer('black').notNullable().defaultsTo(0)
    table.integer('green').notNullable().defaultsTo(0)
    table.integer('colorless').notNullable().defaultsTo(0)
    table.string('api_id').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cards')
}
