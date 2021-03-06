var Schema = require('mongoose').Schema,
    lastModified = require('./plugins/lastModified');

var Person = module.exports = new Schema({
    name        : { type: String, required: true }
});

Person.plugin(lastModified);