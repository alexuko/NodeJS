const fs = require("fs")
const chalk = require('chalk');

const getNotes = () => 'this are my notes'


const removeNote = (title) => {
    const myNotes = loadNotes();

    const noteToRemove = myNotes.findIndex((note)=>{
        return title === note.title;
    })
    //if the note was found
    if(noteToRemove >= 0){
        myNotes.splice(noteToRemove,1)
        console.log(chalk.yellow.bold(`Note "${title}" was removed`))
        saveNotes(myNotes)
    }
    //if the note was not found 
    else{
        console.log(chalk.red.bold('Note was not found, Nothing to remove'))

    }
    console.log(myNotes)
    
}
const addNote = ( title, body) => {
    const notes = loadNotes()

    // const duplicateNotes = notes.filter((note)=> note.title === title) 
    const duplicateNote = notes.find((note)=> note.title === title) 
    
    
    if (!duplicateNote){
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

const saveNotes = notesArray => {
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
const listNotes = () => {
    const myNotes = loadNotes()
    if(myNotes.length != 0){
        console.log(chalk.blue.bold('Your Notes:'))
        myNotes.forEach((note,index) => {
            console.log(`${index+1}: ${note.title}`)            
        });
        
    }
    else{
        console.log(chalk.yellow.bold('Theres is no Notes'))
    }
    
    
} 

const readNote = title => {
    const myNotes = loadNotes()
    
    const noteIndex = myNotes.findIndex(note => note.title === title) 
    // console.log(myNotes)
    // console.log(noteIndex)
    if(noteIndex >= 0){
        console.log(chalk.yellow.bold(`Note Title: ${myNotes[noteIndex].title}, Body: ${myNotes[noteIndex].body}`))
    }
    else{
        console.error(chalk.inverse('No Note found'))

    }
    
}


module.exports = {
    getNotes,
    addNote,
    removeNote,
    listNotes,
    readNote
}