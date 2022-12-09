const palindromes = function (string) {
  let originString = [];
  let reverseString = [];
  string.split('').forEach(element => {
    if(element.toLowerCase() !== element.toUpperCase()) originString.push(element.toLowerCase());
  }); 
  reverseString = originString.reverse().join('');  
  originString = originString.reverse().join('');

  return originString === reverseString;
};

// Do not edit below this line
module.exports = palindromes;
