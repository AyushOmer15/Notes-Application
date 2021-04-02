const notes=require('./notes.js')
const yargs=require('yargs')
const chalk=require('chalk')


yargs.command({
    command:'add',
    describe:'Add a new Node',
    
    builder:{
        title:{
            describe:'Note Title',
            demandOption:true,
            type:'string'
        },
        body:{
            descirbe: "Note itself",
            demandOption:true,
            type: "string"
        }
       
    },
    handler(argv){
        notes.addNote(argv.title,argv.body)
    }
})
yargs.command({
    command: 'remove',
    describe:'Remove the note',
    builder:{
        title:{
            describe:"Note Title",
            demandOption:true,
            type:'string'

        }
    },
    handler(argv){
        notes.removeNote(argv.title)
    }
})
yargs.command({
    command:'list',
    describe:'listing all nodes',
    handler(){
        console.log(chalk.green("Printing all Nodes"))
        notes.listNotes()

    }
})
yargs.command({
    command:'read',
    describe:'Read',
   builder:{
       title:{
           describe:"reading",
           demandOption:true,
           type:'string'
       }
   },
    handler(argv){
        console.log(chalk.green("Reading the Note")),
        notes.readNote(argv.title)
    }
})
yargs.parse()
