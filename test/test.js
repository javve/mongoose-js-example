process.env.NODE_ENV = 'test'

var database = require('./../database'),
    assert = require('assert');

var Person = database.model('Person');

describe('Person', function() {
    it('should create a person than remove it', function(done) {

        var name = "Jonny";

        var person = new Person({
            name: name
        });

        person.save(function(err, person) {

            Person.findById(person._id, function(err, person) {
                assert.equal(null, err);
                assert.equal(name, person.name);

                person.remove(function(err) {
                    Person.findById(person._id, function (err, person) {
                        assert.equal(null, person);
                        done();
                    });
                });

            });

        });
    });
});