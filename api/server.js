const express = require('express');
const cors = require('cors');
const path = require('path');
const {
  logger,
  validateUserId,
  validateUser,
  validatePost
} = require('./middleware/middleware');
const userRouter = require('./users/users-router');

const server = express();

// remember express by default cannot parse JSON in request bodies

server.use(express.json());
server.use(cors());

server.use(express.static(path.join(__dirname, '../client/build')));

// global middlewares and the user's router need to be connected here

server.use(logger);
server.use('/api/users', userRouter);

server.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = server;
