const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
console.log(process.argv);

if (!address) {
  console.log("please provide the address!");
} else {
  geocode(address, (error, {latitude,longitude,location} = {}) => {
    if (error) {
      return console.log(error)
    } else {
      console.log(location)
    }

    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      } else {
        console.log(location)
        console.log(forecastData)
      }
    });
  });
}
