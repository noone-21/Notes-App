const fs= require('fs')
const chalk= require('chalk')

const addNote = (title,body) =>{
    const notes= loadNotes()
    const duplicateNote = notes.find((note)=> note.title===title)

    if(!duplicateNote){
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(chalk.green.inverse('New Note Added Successffully!'))
    }
    else{
        console.log(chalk.red.inverse('Note title taken!'))
    }
}

const removeNote = (title) =>{
    const notes= loadNotes()
    const notesToKeep = notes.filer((note)=> note.title !==title)

    if(notes.length>notesToKeep.length){
        console.log(chalk.green.inverse('Note Removed!'))
        saveNotes(notes)
    }
    else{
        console.log(chalk.red.inverse('No Note found!'))
    }
}

const listNotes= ()=>{
    const notes=loadNotes()

    console.log(chalk.inverse('Your Notes!'))

    notes.forEach((notes)=>{
        console.log(chalk.inverse(note.title))
    })
}

const readNote=(title)=>{
    const notes= loadNotes()
    const note = notes.find((note)=> note.title===title)

    if(note){
            console.log(chalk.inverse(note.title))
            console.log(note.body)
    }
    else{
        console.log(chalk.red.inverse('Note not Found!'))
    }

}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
    console.log(notes)
}

const loadNotes = (title,body) =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e){
        return []
        console.log(e)
    }

}

module.exports= {
    addNote: addNote,
    removeNote:removeNote,
    listNotes:listNotes,
    readNote: readNote,
}