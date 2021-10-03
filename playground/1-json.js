const fs = require('fs')
// /* const book = {
//     title: 'silly title',
//     author: 'uknown',
//     age: 222    
// }

// const bookJson = JSON.stringify(book)
// fs.writeFileSync('1-json.json',bookJson) */

const readFile = fs.readFileSync('1-json.json');
const stringFromJSON = readFile.toString();
const bookFromString = JSON.parse(stringFromJSON)
bookFromString.title = 'Pet sementary'
bookFromString.age = 1985
console.log(bookFromString)

const bookJson = JSON.stringify(bookFromString)
fs.writeFileSync('1-json.json',bookJson) 

