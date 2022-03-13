const ftoc = function(temp) {
  let celsius = (temp - 32) / 1.8;
  let celsRounded = Math.round(celsius * 10) / 10;
  return celsRounded;
};

const ctof = function(temp) {
  let fahrenheit = (temp * 1.8) + 32 ;
  let fahrRounded = Math.round(fahrenheit * 10) / 10;
  return fahrRounded;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
