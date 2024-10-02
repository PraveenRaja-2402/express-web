const http = require("http");

const url =
  "http://api.weatherstack.com/current?access_key=baef527d6b65da73dbaa7c9f50243cae&query=${latitude},${longitude}&units=f";

const request = http.request(url,(response) => {
   let data =''
   
   response.on('data',(chunck) => {
      data = data + chunck.toString()
   })

   response.on('end',() => {
  const body = JSON.parse(data)
  console.log(body)
   })

})

request.on('error',(error) => {
console.log('An error', error)
})

response.end()