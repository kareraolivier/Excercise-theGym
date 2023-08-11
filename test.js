//function rest parameter
//check length if it !> 3 return not enough names
//Remove third element
//iterate through array and add those element
//return the array

const addLastNames = (...names) => {
  if (names.length < 4) {
    return "Not enough names";
  }
  // let element = names[2];
  // let lest = names.filter((el, i) => i != 2);
  // return lest.map((el) => `${el} ${element}`);
  const removedElement = names.splice(2, 1).join("");
  return names.map((el) => `${el} ${removedElement}`);
};
console.log(addLastNames("karera", "olivier", "agnes", "ange"));
