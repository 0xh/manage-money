// Initializes the `records` service on path `/records`
const createService = require('feathers-sequelize');
const createModel = require('../../models/records.model');
const hooks = require('./records.hooks');

module.exports = function (app) {
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'records',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/records', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('records');

  service.hooks(hooks);
};
