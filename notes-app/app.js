const fs = require('fs')
const yargs = require('yargs')
const notes = require('./notes')
const utils = require('./utils')
const validator = require('validator');
const chalk = require('chalk');
const { strict, string } = require('yargs');

const greenBold = chalk.green.inverse.bold


const print = console.log
//////// ADD A NOTE //////////
yargs.command({
    command:'add',
    describe:'add a note',
    builder:{
        title:{
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe: 'The body of my title',
            demandOption: true,
            type: 'string'
        }


    }, 
    handler(argv){
        notes.addNote(argv.title, argv.body)        
    }
})
//////// REMOVE A NOTE //////////
yargs.command({
    command:'remove',
    describe:'remove a note',
    builder: {
        title:{
            describe:'Note to remove',
            demandOption:true,
            type: string
        }
    },
    handler: (argv) => {
        notes.removeNote(argv.title)
    }
})
//////// LIST A NOTE //////////
yargs.command({
    command:'list',
    describe:'list a note',
    handler(){
        notes.listNotes()
    }
})
//////// READ A NOTE //////////
yargs.command({
    command:'read',
    describe:'read a note',
    builder: {
        title:{
            describe:'title looking for',
            demandOption: true,
            type:string
        }
    },
    handler(argv){
        notes.readNote(argv.title)
        
    }
})


// print(yargs.argv)
yargs.parse()