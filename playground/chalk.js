const fs = require('fs')
const chalk = require('chalk')


console.log(chalk.red.bold.underline.inverse('This is green text!'));
console.log(chalk.blue('Hello world!'));
//validator module 
console.log(validator.isEmail('praveencse2402@gmail.com'));
console.log(validator.isURL('https://www.google/eid=chrome&ie=UTF-8'));

//importing methodes and variables
const msg = getNotes();
console.log(msg);

// Writing to notes.txt
fs.writeFileSync('notes.txt','My Name is Jiraya!');

// add new content  to notes.txt
fs.appendFileSync('notes.txt', 'My Another Name is Praveen');

//importing variable 
console.log("My favourite character is : " +name2);

console.log(process.argv)
