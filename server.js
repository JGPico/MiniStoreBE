const express = require('express');

const helmet = require('helmet');
const cors = require('cors');

const server = express();
const expressLayouts = require('express-ejs-layouts');

const indexRouter = require('./routes/index.js');

server.use(helmet());
server.use(cors());

server.use('/', indexRouter);

module.exports = server;