const decksModel = require('../models/decks');


function getAll (req, res, next) {
    decksModel.getAll(req.params.user_id)
    .then(result => {
        if(!result) next({status: 400, message: "User has no decks!"});
        res.status(200).send({ result })
    })
};

function getDeck (req, res, next) {
    decksModel.getDeck(req.params.user_id, req.params.deck_id)
    .then(result => {
        if(!result) next({status: 400, message: "Deck Does Not exist!"});
        res.status(200).send({ result })
    })
};

function create (req, res, next) {
    const creator = req.params.user_id;
    const { deckName, wins, losses } = req.body;
    decksModel.create(deckName, creator, wins, losses)
    .then(function(result) {
        if (!deckName || deckName.length <= 0)
            return next({ status: 400, message: "Your Deck must have a name!" });
        
        if(!creator)
            return next({status: 400, message: "Deck Must be assigned to a user!"});
        
        res.status(201).send({ result })
    })
};

function deleteDeck (req, res, next) {
    decksModel.deleteDeck(req.params.user_id, req.params.deck_id)
    .then(result => {
        if(!result) next({ status: 400, message: "Deck does not Exist"});
        res.status(200).send({ result})
    })
};

function update(req, res, next) {
    const creator = req.params.user_id;
    const deck = req.params.deck_id;
    const {deckName, wins, losses } = req.body;
    decksModel.update(deck, deckName, creator, wins, losses)
    .then(function(result){
        if (!deckName || deckName.length <= 0)
            return next({ status: 400, message: "Your Deck must have a name!" });
    
        if(!creator)
            return next({status: 400, message: "Deck Must be assigned to a user!"});
    
    res.status(201).send({ result })
    })
}

module.exports = {
    getAll,
    getDeck,
    create,
    deleteDeck,
    update
}