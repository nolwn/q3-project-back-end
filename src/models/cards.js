const db = require('../../db')

const getAll = (userId, deckId) => {
  return Promise.all([
    checkDeck(userId, deckId),
    getCards(deckId),
    getTypesFromDeck(deckId)
  ])
  .then(([ _, cards, types ]) => {
    const typeObj = types.reduce((acc, type) => {
      if (!acc[type.card_id]) {
        acc[type.card_id] = []
      }

      acc[type.card_id].push(type.type)

      return acc;
    }, {})

    return cards.map(card => {
      card.types = typeObj[card.id]
      return card
    })
  })
}

const getOne = (userId, deckId, cardId) => {
  return Promise.all([
    checkDeck(userId, deckId),
    getCard(cardId),
    getTypesFromCard(cardId)
  ])
  .then(([ deck, card, types ]) => {
    card.types = types.map(type => type.type)
    return card;
  })
}

const create = (userId, deckId, newCard) => {
  const cardDetails = { ...newCard }
  const cardTypes = newCard.types

  let cardId;
  let responseCard;
  // let typeIds;

  delete cardDetails.types

  return Promise.all([
    createCard(cardDetails),
    createTypes(cardId, cardTypes)
  ])
    .then(([ card, typeIds ]) => {
      responseCard = card;
      return linkTypes(card.id, typeIds)
    })
    .then(cardId => {
      return linkDeck(deckId, cardId)
    })
    .then(() => {
      return responseCard;
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

const remove = (userId, deckId, cardId) => {
    return checkDeck(userId, deckId)
        .then(_deck => {
            return db('decks_cards')
                .where({ deck_id: deckId, card_id: cardId })
                .del()
                .returning('*')
                .then(cards => cards[0])
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
    .where('cards.id', cardId)
    .join('decks_cards', 'decks_cards.card_id', 'cards.id')
    .select('cards.*', 'decks_cards.qty')
}

const getCards = (deckId) => {
  return db('cards')
    .join('decks_cards', 'cards.id', 'decks_cards.card_id')
    .where('decks_cards.deck_id', deckId)
    .select('cards.*', 'decks_cards.qty')
}

const getTypesFromCard = (cardId) => {
  return db('cards_types')
    .select('type_id')
    .where({ card_id: cardId })
    .then(types => {
      const typeIds = types.map(type => type.type_id)

      return db('types')
        .select()
        .whereIn('id', typeIds)
    })
}

const getTypesFromDeck = (deckId) => {
  return db('decks_cards')
    .join('cards', 'cards.id', 'decks_cards.card_id')
    .join('cards_types', 'cards.id', 'cards_types.card_id')
    .join('types', 'cards_types.type_id', 'types.id')
    .select('types.*', 'cards_types.card_id')
    .where('decks_cards.deck_id', deckId)
}

const createTypes = (cardId, cardTypes) => {
  let typeIds = [];

  return db('types')
    .select('*')
    .whereIn('type', cardTypes )
    .then(types => {
      const typeNames = types.map(el => {
        typeIds.push(el.id)
        return el.type
      })
      return cardTypes.filter(cardType => !typeNames.includes(cardType))
    })
    .then(types => {
      const typeObjs = types.map(type => {
        return { type: type }
      })
      if(typeObjs.length > 0) {
        return db('types')
        .insert(typeObjs)
        .returning('id')
        .then(ids => {
          typeIds = typeIds.concat(ids)
          return typeIds
        })
      }
      return typeIds
    })
}

const createCard = (cardDetails) => {
  return db('cards')
    .first()
    .where({ api_id: cardDetails.api_id })
    .then(card => {
      if (!card) {
        return db('cards')
          .insert( cardDetails )
          .returning("*")
          .then(data => data[0])

      } else {
          return card
      }
    })
}

const linkTypes = (cardId, typeIds) => {
  const cardsTypes = typeIds.map(typeId => {
    return { card_id: cardId, type_id: typeId }
  })
  return db('cards_types')
    .select('*')
    .where({ card_id: cardId })
    .then(data => {
      if (data.length < 1) {
        return db('cards_types')
        .insert(cardsTypes)
        .returning("*")
        .then(() => {
          return cardId
        })

      } else {
        return cardId
      }

    })
}

const linkDeck = (deckId, cardId) => {
  return db('decks_cards')
    .first()
    .where({ card_id: cardId, deck_id: deckId })
    .then(deck_card => {
      if(!deck_card) {
        return db('decks_cards')
          .insert({ card_id: cardId, deck_id: deckId, qty: 0 })
          .returning("*")
          .then(newDeckCard => newDeckCard[0])

      } else {
        return deck_card
      }
    })
    .then(deck_card => {
      deck_card.qty++
      return db('decks_cards')
      .where({ id: deck_card.id })
        .update({ qty: deck_card.qty })
    })
}

module.exports = { getAll, getOne, create, incrementQty, decrementQty, remove }
