const geocode = require("./utils/geocode");
const forecast = require("./utils/forecast");

const address = process.argv[2];
console.log(process.argv);

if (!address) {
  console.log("please provide the address!");
} else {
  geocode(address, (error, data) => {
    if (error) {
      return console.log(error);
    } else {
      console.log(data.location);
    }

    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error);
      } else {
        console.log(data.location);
        console.log(forecastData);
      }
    });
  });
}
