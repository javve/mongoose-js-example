module.exports = function lastModifiedPlugin (schema, options) {
    schema.add({ lastModified: Date });
    schema.pre('save', function (next) {
        this.lastModified = new Date();
        next()
    });
};