exports.up = function(knex, Promise) {
  return knex.schema.createTable('types', table => {
    table.increments()
    table.string('type').notNullable()
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('types')
}
