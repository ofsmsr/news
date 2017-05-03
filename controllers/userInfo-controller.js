var userInfoModel = require('../models/userInfo-model');

module.exports.getUsers = function getUsers(req, res) {
    return userInfoModel.userInfo(req, res);
};

module.exports.saveUser = function saveUser(req, res) {
    return userInfoModel.userInfo(req, res);
};
