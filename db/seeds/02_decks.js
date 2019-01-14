exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('decks').del()
    .then(function () {
      // Inserts seed entries
      return knex('decks').insert([
        {
          id: 1,
          deck_name: 'Miracle Grow',
          win_count: 22,
          loss_count: 6,
          user_id: 1
        },
        {
          id: 2,
          deck_name: 'Blue-Red Trix',
          win_count: 27,
          loss_count: 6,
          user_id: 1
        },
        {
          id: 3,
          deck_name: 'Trix',
          win_count: 23,
          loss_count: 5,
          user_id: 1
        },
        {
          id: 4,
          deck_name: 'Affinity',
          win_count: 23,
          loss_count: 6,
          user_id: 3
        },
        {
          id: 5,
          deck_name: 'Tax Rack',
          win_count: 26,
          loss_count: 6,
          user_id: 2
        },
        {
          id: 6,
          deck_name: 'Oath',
          win_count: 27,
          loss_count: 4,
          user_id: 2
        },
        {
          id: 7,
          deck_name: 'Blue-Red-White Midrange',
          win_count: 32,
          loss_count: 7,
          user_id: 2
        },
        {
          id: 8,
          deck_name: 'Megrim Jar',
          win_count: 28,
          loss_count: 1,
          user_id: 2
        },
        {
          id: 9,
          deck_name: 'CMU Academy',
          win_count: 30,
          loss_count: 2,
          user_id: 3
        },
        {
          id: 10,
          deck_name: 'Lauerpotence',
          win_count: 33,
          loss_count: 2,
          user_id: 2
        }
      ])
    })
}
