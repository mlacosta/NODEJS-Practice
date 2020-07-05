
const notes = require('./notes.js');
const chalk = require('chalk');
const yargs = require('yargs');

yargs.version('1.1.0');

let video = 19;
console.log(video/170*100); //percentage of the course

//create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'the content of the note',
            demandOption: true,
            type: 'string'
        }
    },
    handler: notes.addNote(argv.title,argv.body)

})

//create remove command

yargs.command({
    command: 'remove',
    describe: 'Remove a new note',
    handler: notes.removeNote(argv.title),
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    }
})

//create list command

yargs.command(
    {
        command:'list',
        describe:'List all the notes',
        handler: function(){
            console.log('Listing all notes');
        }
    }
)

//create read command
yargs.command(
    {
        command:'read',
        description:'Read a note',
        handler:function(){
            console.log('reading a note');
        }

    }
)


//add, remove, read, list

console.log(yargs.argv);
