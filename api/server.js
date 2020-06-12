const express = require('express');
const server = express();
const UserRouter = require('../Routes/user-router.js');

server.use(express.json());
server.use('/api/users', UserRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'api is running' });
});
module.exports = server;
