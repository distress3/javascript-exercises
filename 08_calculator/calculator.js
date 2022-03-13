const add = function() {
	let sum = 0 + arguments[0] + arguments[1];
  return sum;
};

const subtract = function() {
	let diff = 0;
  if (arguments[0] > arguments[1]) {
    diff = arguments[0] - arguments[1];
  } else {
    diff = arguments[1] - arguments[0];
  }
  return diff;
};

const sum = function(array) {
  let summed = 0;
  for (let i = 0; i <= array.length; i++) {
    if (typeof(array[i]) == 'number') {
      summed += array[i];
    }
  }
  return summed;
};

const multiply = function(array) {
  let product = 1;
  for (let i = 0; i <= array.length; i++) {
    if (typeof(array[i]) == 'number') {
      product *= array[i];
    }
  }
  return product;
};

const power = function() {
	
};

const factorial = function() {
	
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
