const userModel = require('../models/user');

function createUser(req, res, next) {
    if(!req.body.userName){
        return next({ status: 400, message: 'Bad request'})
      }
    
      if(!req.body.password){
        return next({ status: 400, message: 'Bad request'})
      }

      userModel.createUser(req.body.userName, req.body.password)
      .then(function(data) {
          res.status(201).send({ data })
      })

};

function getUser (req, res, next) {
    if(!req.params.userId) return next({status: 400, message: 'Bad Request, UserID is required'});

    userModel.getUser(req.params.userId)
    .then(result => {
        if(!result) next({ status: 400, message: "User Not Found"});
        res.status(200).send({ result })
    })
}

module.exports = {
    createUser,
    getUser
}