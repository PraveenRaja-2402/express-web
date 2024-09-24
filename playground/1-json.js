const fs = require('fs')


//JSON formate
const book = {
    title :'Ego is the Enemy',
    author: 'Ryan Holiday'
}

//JSON stringify()
const BookJSON = JSON.stringify(book)
console.log(BookJSON)


//JSON parse()
const parsedData = JSON.parse(BookJSON)
console.log(parsedData.author)

//write new file
// fs.writeFileSync('1-json.json', BookJSON)


//readfile 
const BufferData = fs.readFileSync('1-json.json')
console.log(BufferData.toString())
// console.log(BufferData)

//test for work with JSON and file system

const registerJSON = {
    email : 'praveencse2402@gmail.com',
    pass : '12345'
}

// const BufferJSON_2 =JSON.stringify(registerJSON)
// console.log("Registeration details here : "+ BufferJSON_2)

// const parsedDate_2 = JSON.parse(BufferJSON_2)
// console.log("The Parseddata is here : " + parsedDate_2.email +  parsedDate_2.pass)

// const change =fs.writeFileSync('./1-json.json', 'Praveen just you started thinking about the coding! hahaha')
//load and parse data
const dataBuffer_3 = fs.readFileSync('./1-json.json')
const BufferJSON_3 = dataBuffer_3.toString()
const user = JSON.parse(BufferJSON_3)
//change the name and age in JSON file
user.name = 'Priyanga',
user.Age  = '100'
//stringify and overite the original file 
const userJSON = JSON.stringify(user)
fs.writeFileSync('./1-json.json', userJSON)



















