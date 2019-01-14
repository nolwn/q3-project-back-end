
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          id: 1,
          user_name: 'Nolan',
          password: '$2a$10$TtzEB5k6bUVl/UfIrOq9hOf2TOFGTSLv9NhNeKuUl8QWtKKNzF.Cm'
        },
        {
          id: 2,
          user_name: 'Chris',
          password: '$2a$10$TtzEB5k6bUVl/UfIrOq9hOf2TOFGTSLv9NhNeKuUl8QWtKKNzF.Cm'
        },
        {
          id: 3,
          user_name: 'Roger',
          password: '$2a$10$TtzEB5k6bUVl/UfIrOq9hOf2TOFGTSLv9NhNeKuUl8QWtKKNzF.Cm'
        }
      ])
    })
    .then(() => {
      return knex.raw(`SELECT setval('users_id_seq', (SELECT MAX(id) FROM users))`)
    })
}
