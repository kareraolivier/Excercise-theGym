const arr = (arr) => {
  return arr.filter((arr) => arr % 2 == 0);
};

const sort = (element) => {
  return element.sort((a, b) => a - b);
};

console.log(sort(arr([1, 4, 8, 3, 2, 4, 4])));

const even = (element) => element.map((nbr) => (nbr % 2 == 0 ? nbr * 2 : nbr));
console.log(even([1, 2, 3, 4, 5, 6]));
