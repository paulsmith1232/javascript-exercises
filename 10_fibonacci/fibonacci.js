const fibonacci = function(num) {
  if (num < 0) return "OOPS";
  let current = 1;
  let last = 0;
  let buffer = 0;
  for(i = 1; i < num; i++){
    buffer = last;
    last = current;
    current += buffer;
  }
  return current;
  // enter loop
  // add num 
};

// Do not edit below this line
module.exports = fibonacci;

