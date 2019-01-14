exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', table => {
    table.increments()
    table.string('deck_name')
    table.integer('win_count')
    table.integer('loss_count')
    table.integer('user_id').references('id').inTable('users')
    table.timestamps(true, true)
  })
}

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('decks')
}
