const fs = require('fs');
const { Console } = require('console');

const getNotes = ()=>{
    return 'Your Notes';
}

const addNote = (title,body)=>{
    const notes = loadNotes();
    const duplicateNotes = notes.filter(function (note){
        return note.title === title;
    })

    if (duplicateNotes.length === 0){
        notes.push(
            {
                title:title,
                body:body
            }
        );

        console.log('new note added');
    }else{
        console.log('Note title taken!')
    }


    
    saveNotes(notes);
}

const loadNotes = ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    }catch(e){
        return [];
    }

}

const saveNotes = (notes)=>{

    const dataJSON = JSON.stringify(notes);

    fs.writeFileSync('notes.json',dataJSON);

}

const removeNote = (title)=>{

    let notes = loadNotes();
}


module.exports = {
    getNotes,
    addNote,
    removeNote
};