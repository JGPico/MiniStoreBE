const express = require('express');

const helmet = require('helmet');
const cors = require('cors');

const server = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index.js');

server.use(helmet());
server.use(cors());

server.set('view engine', 'ejs');
server.set('views', __dirname + '/views');
server.set('layout', 'layouts/layout');
server.use(expressLayouts);
server.use(express.static('public'));

server.use('/', indexRouter);

module.exports = server;