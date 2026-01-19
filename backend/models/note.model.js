const mongoose = require('mongoose');

const NoteSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true, unique: true },
    tag:{type:String, required:true, defaultValue:'general'},
    createdAt: { type: Date, default: Date.now }
});

const Note = mongoose.model('Note', NoteSchema);
module.exports = Note;
