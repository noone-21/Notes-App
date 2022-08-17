const fs= require('fs')
const chalk= require('chalk')
const yargs= require('yargs')
const Notes=require('./notes.js')
const { argv } = require('process')

// yargs.version('17.0.1')

yargs.command({
    command: 'add',
    describe:'Add a New Note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption:true,
            type:'string'
        }
    },
    handler: ()=>{
        const newNote = Notes.addNote(argv.title,argv.body)
        // console.log(newNote)
    }
})

yargs.command({
    command: 'remove',
    describe:'Remove a Note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler: ()=>{
        Notes.removeNote(argv.title)
    }
})

yargs.command({
    command: 'list',
    describe:'List Your Note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler: ()=>{
        Notes.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe:'Read a Note',
    builder:{
        title:{
            describe: 'Note title',
            demandOption:true,
            type: 'string'
        }
    },
    handler: ()=>{
        Notes.readNote(argv.title)
    }
})

yargs.parse()