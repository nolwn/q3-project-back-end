
const db = require('../../db');
const bcrypt = require('bcrypt');

function getUser(userId) {
    return db('users')
    .where({id: userId})
    .then(function([result]) {
        if(result){
            delete result.password
            return result
        }
        else {
            throw {status: 400, message: "User Not Found"}
        }
    })
};

function getAllUsers() {
    return db('users')
}

function createUser(userName, password) {
    return db('users')
    .where({user_name: userName })
    .then(function([result]) {
        if(result) {
            throw {status: 400, message: "User Already Exists"}
        } else {
            return bcrypt.hash(password, 10)
        }
    })
    .then(function(hashedPassword) {
        return (
            db('users')
            .insert({
                user_name: userName, 
                password: hashedPassword})
            .returning('*')
        )
    })
    .then(function([ data ]) {
        delete data.password;
        return data
    })
};

module.exports = {
    getUser,
    createUser,
    getAllUsers
}