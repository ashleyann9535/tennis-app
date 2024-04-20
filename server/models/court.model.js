//imports mongoose
const mongoose = require('mongoose');

//creates the schema for the court entry
const CourtSchema = new mongoose.Schema({
    name: {type: String},
    status: {type: Boolean}
}, {timestamps: true});

//exports the model to be used
module.exports = mongoose.model('Court', CourtSchema);