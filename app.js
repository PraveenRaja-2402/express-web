const request = require("request");
const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

// const url =
//   "https://api.weatherstack.com/current?access_key=baef527d6b65da73dbaa7c9f50243cae&query=11.6643,78.1460&units=m";

// request({ url: url, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to get the weather service !");
//   } else if (response.body.error) {
//     console.log("Unable to find location");
//   } else {
//     console.log(
//       response.body.current.weather_descriptions[0] +
//         "Its is currently " +
//         response.body.current.temperature +
//         " degrees out.Its feels like " +
//         response.body.current.feelslike. + "there is a " + response.body.currently.precipProbability + "% chance of rain"
        
//     );
//   }
// });

// //geocoding
// const geocodeUrl =
//   "https://api.mapbox.com/search/geocode/v6/forward?q=$chennai&proximity=0,0&access_token=pk.eyJ1IjoiamFnYWRlc2gwNyIsImEiOiJjbTB1dHkwZ3EwYjF5MmxzZTE5eDFveHN4In0.W9A7svv6ozS8Mlxr18l40w&limit=1";
// request({ url: geocodeUrl, json: true }, (error, response) => {
//   if (error) {
//     console.log("unable to connect the geocodeing !");
//   }
//   else if (response.body.features === 0) {
//     console.log("Unable to find the latitude and longitude !");
//   }
//   else {
//     const latitude = response.body.features[0].properties.coordinates.longitude;
//     const longitude = response.body.features[0].properties.coordinates.latitude;
//     console.log(latitude, longitude);
//   }
// });

// geocode('chennai', (error, data) => {
//     console.log("error", error);
//     console.log("data", data);
//   });

forecast(-75.7088,44.1545, (error,data) =>{
console.log('error', error)
console.log('data', data)
})
















