// Write a function that takes an array of numbers and returns a
// new array containing only the even numbers, sorted in descending order.
// Use arrow functions and don’t google.

const cleanArray = (array) => {
  return array.filter((arr) => arr % 2 == 0).sort((a, b) => b - a);
};

console.log(cleanArray([2, 2, 34, 56, 11, 10, 23, 56, 90, 23]));
