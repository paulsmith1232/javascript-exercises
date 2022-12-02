const sumAll = function(firstVal, secondVal) {
  let sum = 0;
  let highValue = 0;
  let lowValue = 0;

  if (firstVal < 0 || secondVal < 0 ) return 'ERROR';
  if (typeof firstVal != "number" || typeof secondVal != "number") return 'ERROR';

  if(firstVal < secondVal){
    lowValue = firstVal;
    highValue = secondVal;
  } else {
    lowValue = secondVal;
    highValue = firstVal;
  }

  for(let i = lowValue; i<=highValue; i++){
    sum += i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;
