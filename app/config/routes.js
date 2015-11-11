const BASE_PATH = 'api';
const VERSION = 1;

module.exports = [
  {
    method: 'GET',
    path: '/' + BASE_PATH + '/v' + VERSION + '/hello',
    handler: (request, reply) => {
      reply({ 'api': 'hello' });
    }
  },
  {
    method: 'GET',
    path: 
  }
]
