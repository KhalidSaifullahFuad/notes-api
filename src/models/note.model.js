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
    },
    tags: {
        type: [String],
        required: false
    },
    date: {
        type: Date,
        required: false,
        default: new Date().toISOString()
    }
});

// Model
const Note = Mongoose.model('Note', noteSchema, 'notes_db');

// Export
module.exports = Note;