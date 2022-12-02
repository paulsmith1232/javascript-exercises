const repeatString = function(string, num) {
  let retString = "";
  for(let i = 0; i < num; i++){
    retString += string;
  }
  if(num < 0) retString = "ERROR";
  return retString
};

// Do not edit below this line
module.exports = repeatString;
