const fs = require("fs");
const chalk = require("chalk");
const getNotes = function () {
  return loadNotes();
};

const addNotes = (title, body) => {
  const notes = loadNotes();
  const dublicateNote = notes.find((note) => note.title === title);
  if (!dublicateNote) {
    const note = { title, body };
    notes.push(note);
    saveNotes(notes);
    console.log("Note added!");
  } else {
    console.log("Note title taken!");
  }
};

const removeNote = (title) => {
  const notes = loadNotes();
  const filteredNotes = notes.filter((note) => note.title !== title);
  if (filteredNotes.length === notes.length) {
    console.log(chalk.red.inverse("no match found"));
  } else {
    saveNotes(filteredNotes);
    console.log(title, " removed");
  }
};

const loadNotes = () => {
  try {
    const notesBuffer = fs.readFileSync("1-json.json");
    const notesJSON = notesBuffer.toString();
    const notes = JSON.parse(notesJSON);
    return notes;
  } catch (error) {
    return [];
  }
};

const saveNotes = (notes) => {
  const notesJSON = JSON.stringify(notes);
  fs.writeFileSync("1-json.json", notesJSON);
  loadNotes();
};

const listNotes = () => {
  const notes = loadNotes();
  console.log(chalk.white.inverse("Your notes"));
  notes.forEach((note) => {
    console.log(note.title);
  });
};

module.exports = {
  getNotes,
  addNotes,
  removeNote,
  listNotes,
};
