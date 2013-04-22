module.exports = (function() {
    return require('./'+process.env.NODE_ENV);
})();