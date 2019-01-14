const bcrypt = require('bcrypt');
const userModel = require('./usermodel');

function login(userName, password) {
    let user;

    return userModel.getUser(userName)
    .then(function(data) {
        if (!data) throw {stats: 400, message: "No User By that Name Exists"};

        user = data;

        return bcrypt.compareSync(password, data.password)
    })
    .then(function(status) {
        if(!status) throw {status: 400, message: "Unauthorized Login!"};

        delete user.password;

        return user;
    })
};

module.exports = { login }