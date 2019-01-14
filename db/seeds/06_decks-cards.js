
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          deck_id: 1,
          card_id: 1,
          qty: 3
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 2,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 3,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 4,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 5,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 6,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 7,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 8,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 9,
          qty: 3
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 10,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 11,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 12,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 13,
          qty: 4
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 14,
          qty: 6
        },
        {
          id: 1,
          deck_id: 1,
          card_id: 15,
          qty: 4
        }
      ])
    })
}
