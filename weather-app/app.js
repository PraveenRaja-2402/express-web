const request = require('request')

const url = 'https://api.weatherstack.com/current?access_key=baef527d6b65da73dbaa7c9f50243cae&query=11.6643,78.1460&units=f';

request({url :url, json:true}, (error,response) => {
   
// console.log(response.body.current)
console.log(response.body.current.weather_summary[0] +"Its is currently" +response.body.current.weather_descriptions[0] )
})