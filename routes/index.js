// routes/index.js
const irisRoutes = require('./iris_routes');
module.exports = function(app, db) {
  irisRoutes(app, db);
  // Other route groups could go here, in the future
};