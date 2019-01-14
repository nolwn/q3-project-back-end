
exports.seed = function(knex, Promise) {
  return knex('decks_cards').del()
    .then(() => knex('cards_types').del())
    .then(() => knex('types').del())
    .then(() => knex('cards').del())
    .then(() => knex('decks').del())
    .then(() => knex('users').del());
}
