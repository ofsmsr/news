var loginModel = require('../models/login-model');

module.exports.doLogin = function doLogin(req, res) {
    return loginModel.login(req, res);
};