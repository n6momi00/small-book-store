const express = require('express');
const server = express();
const cors = require('cors');
const api = require('./api');
const { errorHandler } = require('./middleware/errors');

server.use(express.json());
server.use(cors());
server.use('/api', api);

const { PORT } = process.env;

server.use(errorHandler);

server.get('*', (req, res) => {});

server.listen(PORT, (error) => {
  if (error) {
    return;
  }
  console.log(`Server listening on port ${PORT}`);
});
