// LETTERS
const letters = ['a', 'd', 'z', 'e', 'r', 'b'];

console.log(letters.sort()); // [ 'a', 'b', 'd', 'e', 'r', 'z' ]

// NUMBERS
const numbers = [2, 65, 34, 2, 1, 8, 7];

console.log(numbers.sort()); // [1, 2, 2, 34, 65, 7, 8]
console.log(numbers.sort((a, b) => a - b)); // [1, 2, 2, 7, 8, 34, 65]
