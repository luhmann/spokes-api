module.exports = {
  identity: 'campaign',
  connection: 'mongo',
  attributes: {
    name: 'string',
    startTime: 'datetime',
    endTime: 'datetime',
    configuration: 'json'
  }
};
