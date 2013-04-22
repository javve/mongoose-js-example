var mongoose = require('mongoose'),
    config = require('./../config');

// Sets the Schemas
require('./../models')(mongoose);

module.exports = (function() {
    return mongoose.connect('mongodb://'+config.mongohq.user+':'+config.mongohq.password+'@'+config.mongohq.url);
})();