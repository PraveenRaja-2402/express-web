const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=baef527d6b65da73dbaa7c9f50243cae&query=${latitude},${longitude}&units=f" +
    latitude +
    "," +
    longitude +
    "&units=f";

  request({ url: url, json: true }, (error, response) => {
    if (error) {
      callback("Unale to find the weather service" + undefined);
    } else if (response.body.error) {
      callback("unable to find the location");
    } else {
      console.log(
        response.body.current.weather_descriptions[0] +
          "Its is currently " +
          response.body.current.temperature +
          " degrees out.Its feels like " +
          response.body.current.feelslike +
          " There is a " +
          response.body.current.precip +
          "% chance of rain"
      );
    }
  });
};

module.exports = forecast;
