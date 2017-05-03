var userInfoController = require('../controllers/userInfo-controller');

module.exports = function(app) {
    app.get('/users', userInfoController.getUsers);
};
