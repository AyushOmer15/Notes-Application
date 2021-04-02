const chalk = require('chalk')
const fs=require('fs')


const getNotes=()=>{
    return ("Your notes...")
}
const addNote=(title,body)=>
{
    const notes=loadNotes()
    const duplicateNotes=notes.filter((notes)=>notes.title===title)
    if(duplicateNotes.length===0)
    {
    notes.push({
    title:title,
    body:body 
    })
    saveNotes(notes)
    console.log(chalk.green.inverse('New Note Added'))
    }
    else{
    console.log('Title Already taken')}
    }

const saveNotes=(notes)=>
{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)  
}
const loadNotes=()=> 
{
    try{

        const dataBuffer=fs.readFileSync('notes.json')
        const dataJSON=dataBuffer.toString()
        return JSON.parse(dataJSON)
    }catch(e)
    {
        return []
    }

}
const removeNotes=(title)=>
{
    const note=loadNotes()
  const  notesToKeep=note.filter((note)=>note.title!==title)
  if(notesToKeep.length===note.length)
  {
      console.log(chalk.red.inverse('Nothing Removed'))
  }
  else
  console.log(chalk.green.inverse('Note removed'))
    
    saveNotes(notesToKeep)
}
const listNodes=()=>{
    const list= loadNotes()
    list.forEach((note)=>{
        console.log(note.title)
    })

}
const readNote=(title)=>{
    const list=loadNotes()
    const req=list.find((note)=>note.title===title)
    if(!req)
    {console.log(chalk.red("Match Not Found"))}
    else
    {console.log("Title: "+req.title)
        console.log("Body: "+req.body)
    }
}


module.exports={
    getNotes: getNotes,
    addNote :addNote,
    removeNote:removeNotes,
    listNotes:listNodes,
    readNote:readNote
}