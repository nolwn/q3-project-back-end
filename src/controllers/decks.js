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
    const { title, released, director, rating, poster } = req.body;
    decksModel.create()
}

module.exports = {
    getAll,
    getDeck,
    create
}