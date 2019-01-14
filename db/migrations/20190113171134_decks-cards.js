exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks_cards', table => {
    table.increments()
    table.integer('card_id').references('id').inTable('cards')
    table.integer('deck_id').references('id').inTable('decks')
    table.integer('qty').notNullable().defaultsTo(1);
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('decks_cards')
}
