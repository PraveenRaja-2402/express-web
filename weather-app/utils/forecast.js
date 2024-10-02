const request = require("request");

const forecast = (latitude, longitude, callback) => {
  const url =
    "https://api.weatherstack.com/current?access_key=baef527d6b65da73dbaa7c9f50243cae&query=${latitude},${longitude}&units=f" +
    latitude +
    "," +
    longitude +
    "&units=f";
 //object short hand is used
  request({ url, json: true }, (error, { body }) => {
    if (error) {
      callback("Unale to find the weather service", undefined);
    } else if (body.error) {
      callback("unable to find the location", undefined);
    } else {
      callback(
        undefined,
          "Its is currently " +
          body.current.temperature + 
          "degree out there" +
          " There is a " +
          body.current.precip +
          "% chance of rain"
      );

      const { temperature, precip } = body.current;
      console.log(temperature);
      console.log(precip);
    }
  });
};

module.exports = forecast;
