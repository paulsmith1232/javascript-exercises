const convertToCelsius = function(num) {
  let retValue = 0;
  retValue = (num - 32) * 5/9;
  return Math.round(retValue * 10) / 10;
};

const convertToFahrenheit = function(num) {
  let retValue = 0;
  retValue = num * 9/5 +32;
  return Math.round(retValue * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
