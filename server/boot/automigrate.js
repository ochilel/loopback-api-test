'use strict';

module.exports = function(app) {
  app.dataSources.mongodb.autoupdate(['Product','Company','Category','Account'],err => {
    if (err) throw err;
  });
};
