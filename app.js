const notes = require("./notes");
const yargs = require("yargs");
//Customize yargs
yargs.version("1.1.0");
yargs.command({
  command: "add",
  describe: "Add a new note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNotes(argv.title, argv.body);
  },
});
yargs.command({
  command: "remove",
  describe: "remove a note",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});
yargs.command({
  command: "list",
  describe: "list notes",
  handler() {
    notes.listNotes();
  },
});
yargs.parse();
// const command = process.argv[2]
// if(command==="add"){
//     console.log('Adding note!')
// }else{
//     console.log('Deleting note!')
// }

// const chalk = require('chalk')
// const validator = require('validator')
// const getNotes = require('./notes.js')
// console.log(chalk.blue.bold(getNotes()))
// console.log(validator.isURL("kartonah.com"))

// const add = require('./utils.js')
// console.log(add(1,2));
