const Hapi = require('hapi');
const dbConfig = require('./config/db.js')

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route(require('./config/routes.js'));

server.register(dbConfig, (err) => {
  if (err) {
    throw err;
  }

  server.start(() => {
    console.log('Server running at:', server.info.uri);
  });
});
