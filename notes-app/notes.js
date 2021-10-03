const fs = require("fs")
const chalk = require('chalk');

const getNotes = () => 'this are my notes'

const addNote = ( title, body) => {
    const notes = loadNotes()

    const duplicateNotes = notes.filter((note)=> {
        return note.title === title 
    })
    
    if (duplicateNotes.length === 0){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.bold('new note added'))
    }    
    else{
        console.log(chalk.red.bold('note is already taken'))
        
    }

    console.log(notes)

}

const saveNotes = (notesArray) => {
    const dataJSON =  JSON.stringify(notesArray)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)        
    } catch (error) {
        return []
    }
}
 

module.exports = {
    getNotes,
    addNote
}