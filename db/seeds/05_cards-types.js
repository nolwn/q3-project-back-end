
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('cards_types').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards_types').insert([
        {
          id: 1,
          card_id: 1,
          type_id: 1
        },
        {
          id: 2,
          card_id: 1,
          type_id: 2
        },
        {
          id: 3,
          card_id: 1,
          type_id: 3
        },
        {
          id: 4,
          card_id: 2,
          type_id: 1
        },
        {
          id: 5,
          card_id: 2,
          type_id: 4
        },
        {
          id: 6,
          card_id: 3,
          type_id: 1
        },
        {
          id: 7,
          card_id: 3,
          type_id: 5
        },
        {
          id: 8,
          card_id: 4,
          type_id: 6
        },
        {
          id: 9,
          card_id: 5,
          type_id: 6
        },
        {
          id: 10,
          card_id: 6,
          type_id: 7
        },
        {
          id: 11,
          card_id: 7,
          type_id: 7
        },
        {
          id: 12,
          card_id: 8,
          type_id: 7
        },
        {
          id: 13,
          card_id: 9,
          type_id: 7
        },
        {
          id: 14,
          card_id: 10,
          type_id: 7
        },
        {
          id: 15,
          card_id: 11,
          type_id: 7
        },
        {
          id: 16,
          card_id: 12,
          type_id: 8
        },
        {
          id: 17,
          card_id: 13,
          type_id: 9
        },
        {
          id: 18,
          card_id: 13,
          type_id: 10
        },
        {
          id: 19,
          card_id: 14,
          type_id: 11
        },
        {
          id: 20,
          card_id: 14,
          type_id: 13
        },
        {
          id: 21,
          card_id: 15,
          type_id: 12
        },
        {
          id: 22,
          card_id: 15,
          type_id: 13
        },
        {
          id: 23,
          card_id: 15,
          type_id: 14
        }
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('cards_types_id_seq', (SELECT MAX(id) FROM cards_types))`
      )
    })
}
