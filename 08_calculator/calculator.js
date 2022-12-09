const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, item) => total + item, 0);
};

const multiply = function(arr) {
	return arr.reduce((total, item) => {
    if(total === 0) total = item;
    else total *= item;
    return total;
  }, 0);
};

const power = function(a, b) {
  let sum = a;
	for(let i = 1; i < b; i++){
    sum *= a;
  }
  return sum;
};

const factorial = function(num) {
  let sum = 1;
  for(let i = 1; i < num+1; i++) sum *= i;
  return sum;
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
