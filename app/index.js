const Hapi = require('hapi');
const Dogwater = require('dogwater');
const Mongo = require('sails-mongo');

const dbConfig = require('./config/db')

const server = new Hapi.Server();
server.connection({ port: 3000 });

server.route({
  method: 'GET',
  path: '/api',
  handler: (request, reply) => {
    reply({ 'api': 'hello' });
  }
});

server.register(dbConfig);

server.start(() => {
  console.log('Server running at:', server.info.uri);
});
