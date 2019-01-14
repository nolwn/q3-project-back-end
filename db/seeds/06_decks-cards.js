
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('decks_cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('decks_cards').insert([
        {
          id: 1,
          deck_id: 1,
          card_id: 1,
          qty: 3
        },
        {
          id: 2,
          deck_id: 1,
          card_id: 2,
          qty: 4
        },
        {
          id: 3,
          deck_id: 1,
          card_id: 3,
          qty: 4
        },
        {
          id: 4,
          deck_id: 1,
          card_id: 4,
          qty: 4
        },
        {
          id: 5,
          deck_id: 1,
          card_id: 5,
          qty: 4
        },
        {
          id: 6,
          deck_id: 1,
          card_id: 6,
          qty: 4
        },
        {
          id: 7,
          deck_id: 1,
          card_id: 7,
          qty: 4
        },
        {
          id: 8,
          deck_id: 1,
          card_id: 8,
          qty: 4
        },
        {
          id: 9,
          deck_id: 1,
          card_id: 9,
          qty: 3
        },
        {
          id: 10,
          deck_id: 1,
          card_id: 10,
          qty: 4
        },
        {
          id: 11,
          deck_id: 1,
          card_id: 11,
          qty: 4
        },
        {
          id: 12,
          deck_id: 1,
          card_id: 12,
          qty: 4
        },
        {
          id: 13,
          deck_id: 1,
          card_id: 13,
          qty: 4
        },
        {
          id: 14,
          deck_id: 1,
          card_id: 14,
          qty: 6
        },
        {
          id: 15,
          deck_id: 1,
          card_id: 15,
          qty: 4
        }
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('decks_cards_id_seq', (SELECT MAX(id) FROM decks_cards))`
      )
    })
}
