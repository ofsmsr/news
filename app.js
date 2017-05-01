'use strict';
var express = require('express'),	
	app = express();

require('./routes/login-route')(app);

app.listen(3000, function () {
    console.log('server running in http://localhost:3000/');
});
