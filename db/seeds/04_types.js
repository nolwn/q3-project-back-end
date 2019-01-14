
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('types').del()
    .then(function () {
      // Inserts seed entries
      return knex('types').insert([
        {
          id: 1,
          type: 'Creature'
        },
        {
          id: 2,
          type: 'Elf'
        },
        {
          id: 3,
          type: 'Merfolk'
        },
        {
          id: 4,
          type: 'Rogue'
        },
        {
          id: 5,
          type: 'Dryad'
        },
        {
          id: 6,
          type: 'Sorcery'
        },
        {
          id: 7,
          type: 'Instant'
        },
        {
          id: 8,
          type: 'Artifact'
        },
        {
          id: 9,
          type: 'Enchantment'
        },
        {
          id: 10,
          type: 'Aura'
        },
        {
          id: 11,
          type: 'Basic Land'
        },
        {
          id: 12,
          type: 'Land'
        },
        {
          id: 13,
          type: 'Island'
        },
        {
          id: 14,
          type: 'Forest'
        }
      ])
    })
    .then(() => {
      return knex.raw(
        `SELECT setval('types_id_seq', (SELECT MAX(id) FROM types))`
      )
    })
}
