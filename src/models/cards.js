const db = require('../../db')

const getAll = (userId, deckId) => {
  checkDeck()
    .then(_deck => {
      return db('cards')
    })
}

const getOne = (userId, deckId, cardId) => {
  checkDeck()
    .then(_deck => {
      return db('cards')
        .first()
        .where({ id: cardId })
    })
}

const create = (userId, deckId, newCard) => {
  let response;
  checkDeck(userId, deckId)
    .then(deck => {
      return db('cards')
        .first()
        .where({ api_id: newCard.api })
        .then(card => {
          if (!card) {
            return db('cards')
              .insert( newCard )
              .returning("*")

          } else {
            return card
          }
        })
        .then(card => {
          response = card
          return db('decks_cards')
            .first()
            .where({ card_id: response.id, deck_id: deckId })
        })
        .then(deck_card => {
          if(!deck_card) {
            return db('decks_cards')
              .insert({ card_id: response.id, deck_id: deckId, qty: 0 })
              .returning("*")
          }
        })
        .then(deck_card => {
          deck_card.qty++
          return response
        })
    })
}

/*
 *  HELPER FUNCTIONS
 */

const checkDeck = (userId, deckId) => {
  return db('decks')
    .first()
    .where({ id: deckId, user_id: userId })
    .then(deck => {
      if (!deck) {
        throw { status: 400, error: 'A deck for that user could not be found.' }
      }

      return deck
    })
}

module.exports = { getAll, getOne, create }
