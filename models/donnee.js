/**
 * Created by thibault on 28/02/17.
 */
/**
 * Module dependencies.
 */
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
/**
 * Customer Schema
 */
var DonneeSchema = new Schema({
    donneeId: { type: String, index: true },
    date: { type: Date, default: Date.now },
    port: [String],
    value: [Number]
});

/**
 * Pre-save hook
 */

DonneeSchema.pre('save', function(next) {
    if (!this.isNew) {
        return next();
    }
});

module.exports = mongoose.model('Donnee', DonneeSchema);