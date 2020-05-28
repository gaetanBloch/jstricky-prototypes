const numbers = [1, 2, 3]; // new Array()
// .map is part of the prototype of Array which is another object linked
// automatically when creating a new array
const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers);
