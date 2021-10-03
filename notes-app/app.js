const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes')
const utils = require('./utils')
const validator = require('validator');
const chalk = require('chalk');

const greenBold = chalk.green.inverse.bold


const print = console.log
//////// ADD A NOTE //////////
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'Note titel',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'The body of my title',
            demandOption: true,
            type: 'string'
        }


    }, 
    handler: (argv) => {
        notes.addNote(argv.title, argv.body)        
    }
})
//////// REMOVE A NOTE //////////
yargs.command({
    command:'remove',
    describe:'remove a note',
    handler: function(){
        print('removing a note')
    }
})
//////// LIST A NOTE //////////
yargs.command({
    command:'list',
    describe:'list a note',
    handler: function(){
        print('listing a note')
    }
})
//////// READ A NOTE //////////
yargs.command({
    command:'read',
    describe:'read a note',
    handler: function(){
        print('reading a note')
    }
})


// print(yargs.argv)
yargs.parse()