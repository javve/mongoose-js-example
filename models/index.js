module.exports = function(mongoose) {
    mongoose.model('Person', require('./person'));
};