const express = require('express');
const routes = require('./routes');
const bodyParser = require('body-parser');

class Server {

  constructor () {
    this.express = express();
    this.express.use(bodyParser.json());
    this.express.use(routes);
  }

  start(callback) {

    this.express.listen(3000, callback);
  }

}

module.exports = Server;
