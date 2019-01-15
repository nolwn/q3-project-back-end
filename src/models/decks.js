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

function create(deckName, creator, wins, losses) {
    return db('decks')
    .insert({
        deck_name: deckName,
        win_count: wins,
        loss_count: losses,
        user_id: creator
    })
    .returning('*')
    .then(function([data]){
        return data
    })
};

function deleteDeck(userId, deckId) {
    return db('decks')
    .del()
    .where({
        id: deckId,
        user_id: userId
    })
    .returning('*')
};

function update(deckId, deckName, creator, wins, losses) {
    return db('decks')
    .update({
        deck_name: deckName,
        win_count: wins,
        loss_count: losses
    })
    .where({
        id: deckId,
        user_id: creator
    })
    .returning('*')
};

module.exports = {
    getAll,
    getDeck,
    create,
    deleteDeck,
    update
};