const Server = require('./delivery/http/Server');

const server = new Server();

server.start(function() {
  console.log('server is running');
});
