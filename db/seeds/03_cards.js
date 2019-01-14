
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('table_name').del()
    .then(function () {
      // Inserts seed entries
      return knex('table_name').insert([
        {
          id: 1,
          name: 'Gaea\'s Skyfolk',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 1,
          colorless: 0,
          api_id: 'bcec34f6-3ad0-5e68-90e2-f74cddebe336'
        },
        {
          id: 2,
          name: 'Lord of Atlantis',
          red: 0,
          white: 0,
          blue: 2,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: '7b6ed2b2-b8c8-5b35-9f10-568bbfce159a'
        },
        {
          id: 3,
          name: 'Merfolk Looter',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 1,
          api_id: 'b5a13898-fabc-536c-9d31-7108d169d7e3'
        },
        {
          id: 4,
          name: 'Quirion Dryad',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 1,
          colorless: 1,
          api_id: 'abb702c9-db9f-54dc-ad73-87d69ecaa616'
        },
        {
          id: 5,
          name: 'Land Grant',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 1,
          colorless: 1,
          api_id: '3c7a1d34-c9e1-5c34-878b-e41059e4c1fe'
        },
        {
          id: 6,
          name: 'Sleight of Hand',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 'd678d49d-2bf2-504f-a99f-71790f26ee40'
        },
        {
          id: 7,
          name: 'Brainstorm',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: '751e77a1-b113-5c5f-a6ef-b85e2d3c560a'
        },
        {
          id: 8,
          name: 'Daze',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 1,
          api_id: 'dc276e0a-227e-563d-8a63-c4a03846393d'
        },
        {
          id: 9,
          name: 'Foil',
          red: 0,
          white: 0,
          blue: 2,
          black: 0,
          green: 0,
          colorless: 2,
          api_id: '50b1c60b-2ceb-581b-b0c9-5504ad777c54'
        },
        {
          id: 10,
          name: 'Force of Will',
          red: 0,
          white: 0,
          blue: 2,
          black: 0,
          green: 0,
          colorless: 3,
          api_id: '7a57924c-801b-57af-b854-fb6a61fb8685'
        },
        {
          id: 11,
          name: 'Gush',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 4,
          api_id: '868d6f36-65aa-5047-b203-7a42fa6d1214'
        },
        {
          id: 12,
          name: 'Winter Orb',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 0,
          colorless: 2,
          api_id: 'f54aeaa6-fb81-5f7f-8d86-fbe398f5d089'
        },
        {
          id: 13,
          name: 'Curiosity',
          red: 0,
          white: 0,
          blue: 1,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: ''
        },
        {
          id: 14,
          name: 'Island',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 'c7dbbc27-f74e-52c9-b974-75c675d73e57'
        },
        {
          id: 15,
          name: 'Tropical Island',
          red: 0,
          white: 0,
          blue: 0,
          black: 0,
          green: 0,
          colorless: 0,
          api_id: 'ee3e9e61-3136-5bce-9af6-37b7f44b93f4'
        }
      ]);
    });
};
