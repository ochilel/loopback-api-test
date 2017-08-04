'use strict';

module.exports = function(Company) {

  Company.greet = function (msg, cb) {
    cb(null, msg);
  };

  Company.listCompanies= function (cb) {
    Company.find()
      .then(companies => {
        cb(null, companies);
    })
    .catch (err => {
      cb(err);
    });
  };

  Company.remoteMethod('greet', {
    accepts: {
      arg: 'msg',
      type: 'string'
    },
    returns: {
      arg: 'greeting',
      type: 'string'
    },
    http: {
      verb: 'get'
    }
  });



  /**
   * Say greetings to a user
   * @param {string} msg That name for greetings user
   * @param {Function(Error, string)} callback
   */

  Company.myGreet = function(msg, callback) {
    var greetings;
    // TODO
    callback(null, msg);
  };

};
