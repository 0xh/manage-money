const users = require('./users/users.service.js');
const records = require('./records/records.service.js');
module.exports = function (app) {
  app.configure(users);
  app.configure(records);
};
