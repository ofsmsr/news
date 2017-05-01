var db = require('./db');

module.exports.login = function(req, res) {
    var obj = {
        username: 'admin',
        password: 'admin',
    };

    db.collections.loginCol.findOne(obj, function (err, loginDetails) {
        if (err || !loginDetails) {
            res.send(null);
        } else {
            res.send(loginDetails);
        }
    });
};
