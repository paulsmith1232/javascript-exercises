const removeFromArray = function(...args) {
  let retArray = args[0];
  let indexArray = []
  // assign remaining args to array
  for (let i = 1; i < args.length; i++){ 
    indexArray.push(args[i]);
  }
  
  for (const value of indexArray){
    let index = retArray.indexOf(value);
    if (index >= 0) retArray.splice(index, 1);
  }
  return retArray;
};

// Do not edit below this line
module.exports = removeFromArray;
