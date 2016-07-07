'use strict';

const app = require('express')();
const requireTree = require('require-tree');
const init = requireTree('./init/');
const logger = require('morgan');
const path = require('path');
const serveStatic = require('serve-static');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');

init.database();
require('./models');

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(serveStatic(path.join(__dirname, '../public')));
app.use(session({ saveUninitialized: false, resave: false, secret: 'SECRET' }));
app.use(methodOverride());

require('./routes/index')(app);

// error handling setup
init.errorHandlers(app);

module.exports = app;
