const db = require('../../db');

function getAll(userId) {
    return db('users')
    .leftJoin('decks', 'users.id', 'decks.user_id')
    .where({user_id: userId})
    .returning('*')
};

function getDeck(userId, deckId) {
    return db('users')
    .leftJoin('decks', 'users.id', 'decks.user_id')
    .where({
        'decks.id': deckId,
        user_id: userId
    })
    .returning('*')
}

function create() {
    
}

module.exports = {
    getAll,
    getDeck
}