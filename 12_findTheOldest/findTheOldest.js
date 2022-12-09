/* OLD solution
const findTheOldest = function(arr) {
  return arr.reduce((obj, curr) => {
    let objEndDate = 0;
    let currEndDate = 0;
    if(Object.keys(obj).length === 0) {
      obj = curr;
    }
    obj.hasOwnProperty('yearOfDeath') ? objEndDate = obj.yearOfDeath : objEndDate = new Date().getFullYear();
    curr.hasOwnProperty('yearOfDeath') ? currEndDate = curr.yearOfDeath : currEndDate = new Date().getFullYear();

    if(objEndDate - obj.yearOfBirth < currEndDate - curr.yearOfBirth){
      obj = curr;
    }
    return obj;
  }, {})
};
*/

// contributed solution
const findTheOldest = function(array) {
  return array.reduce((oldest, currentPerson) => {
    const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
    const currentAge = getAge(currentPerson.yearOfBirth, currentPerson.yearOfDeath);
    return oldestAge < currentAge ? currentPerson : oldest;
  })
};

const getAge = function(birth, death) {
  if (!death) {
    death = new Date().getFullYear();
  }
  return death - birth;
};
// Do not edit below this line
module.exports = findTheOldest;
