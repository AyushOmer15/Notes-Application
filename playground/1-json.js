const fs = require('fs')
// const book={
//     title:"The Lost Symbol",
//     author:'Dan Brown'

// }
// const jsonBook=JSON.stringify(book)
// fs.writeFileSync("1-json.json",jsonBook)
// const dataBuffer=fs.readFileSync('1-json.json')
// datajson=dataBuffer.toString()
// const data=JSON.parse(datajson)
// console.log(data.title)
const dataBuffer=fs.readFileSync("1-json.json")
const data=dataBuffer.toString()
const challenge=JSON.parse(data)
challenge.name='Ayush'
const challenge1=JSON.stringify(challenge)
fs.writeFileSync('1-json.json',challenge1)
