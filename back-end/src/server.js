const express = require('express');
const server = express();
const morgan = require('morgan');

const reason_changeRouter = require('./routes/strategy/reason_changeRoutes');
const growth_gapRouter = require('./routes/strategy/growth_gapRoutes');
const profileRoutes = require('./routes/strategy/profileRoutes');

server.use(express.json());
server.use(morgan('dev'));
server.use('/strategy', reason_changeRouter, growth_gapRouter);


//USERS







//POST


module.exports = server;