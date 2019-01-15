exports.up = function(knex, Promise) {
  return knex.schema.createTable('decks', table => {
    table.increments()
    table.string('deck_name').notNullable()
    table.integer('win_count').defaultTo(0)
    table.integer('loss_count').defaultTo(0)
    table.integer('user_id').references('id').inTable('users')
    table.timestamps(true, true)
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('decks')
};
