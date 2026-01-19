const Note = require('../../models/note.model')
const createNote = async (data) => {
  return await Note.create(data);
};
const getNotes = async () => {
  return await Note.find();
};
module.exports = { createNote,getNotes }