var loginController = require('../controllers/login-controller');

module.exports = function(app) {
    app.post('/login', loginController.doLogin);
};