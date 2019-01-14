exports.up = function(knex, Promise) {
  return knex.schema.createTable('cards_types', table => {
    table.increments()
    table.integer('card_id').references('id').inTable('cards')
    table.integer('type_id').references('id').inTable('types')
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cards_types')
}
