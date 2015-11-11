const Dogwater = require('dogwater');
const Mongo = require('sails-mongo');
const DbModels = require('../models/models.js');

module.exports = {
  register: Dogwater,
  options: {
    adapters: {
      mongo: Mongo
    },
    connections: {
      mongo: { adapter: 'mongo' }
    },
    models: DbModels
  }
};
