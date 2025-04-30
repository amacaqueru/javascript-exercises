const convertToCelsius = function(fahrenheit) {
  let newCel = parseFloat(((fahrenheit - 32) * 5/9).toFixed(1));
  return newCel;
};

const convertToFahrenheit = function(celsius) {
  let newFar = parseFloat(((celsius * 9/5) + 32).toFixed(1));
  return newFar;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
///////////////////////////////////////////

// console.log(convertToCelsius(100));

