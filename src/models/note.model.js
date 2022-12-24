// Dependencies
const Mongoose = require('../services/db.service');

// Schema
const noteSchema = new Mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    }
});

// Model
const Note = Mongoose.model('Note', noteSchema);

// Export
module.exports = Note;