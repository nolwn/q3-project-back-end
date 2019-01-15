const db = require('../../db')

const getAll = (userId, deckId) => {
  return checkDeck(userId, deckId)
    .then(_deck => {
      return db('cards')
        .join('decks_cards', 'cards.id', 'decks_cards.card_id')
        .select('cards.*', 'decks_cards.qty')
    })

}

const getOne = (userId, deckId, cardId) => {
  return checkDeck(userId, deckId)
    .then(_deck => {
      return db('cards')
        .first()
        .where({ id: cardId })
    })
}

const create = (userId, deckId, newCard) => {
  let response
  return checkDeck(userId, deckId)
    .then(deck => {
      return db('cards')
        .first()
        .where({ api_id: newCard.api_id })
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

          } else {
            return deck_card
          }
        })
        .then(deck_card => {
          console.log(response)
          deck_card.qty++
          response.qty = deck_card.qty
          return db('decks_cards')
            .update(deck_card)
            .where({ id: deck_card.id })
        })
        .then(() => {
          return response
        })
    })
}

const incrementQty = (userId, deckId, cardId) => {
  return checkDeck(userId, deckId)
    .then(_deck => {
      return db('decks_cards')
        .where({ deck_id: deckId, card_id: cardId })
        .increment('qty', 1)
        .returning('*')
    })
}

const decrementQty = (userId, deckId, cardId) => {
  return checkDeck(userId, deckId)
    .then(_deck => {
      return db('decks_cards')
        .where({ deck_id: deckId, card_id: cardId })
        .decrement('qty', 1)
        .returning('*')
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
        throw { status: 400, error: 'That user/deck could not be found.' }
      }

      return deck
    })
}

const getCard = (cardId) => {
  return db('cards')
    .first()
    .where({ id: cardId })
}

const getTypes = (cardId) => {
  return db('cards_types')
    .select('type_id')
    .where({ card_id: cardId })
    .then(types => {
      const typeIds = types.map(type => type.type_id);

      return db('types')
        .select()
        .whereIn(typeIds)
    })
}

module.exports = { getAll, getOne, create, incrementQty, decrementQty }
