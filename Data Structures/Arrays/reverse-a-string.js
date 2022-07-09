/**
 * QUESTION
 * Create a function that reverses a string
 * Demo -
 * `Hi! My name is Durgesh` -> `hsegruD si eman yM !iH`
 */

// SOLUTIONS

// using reverse method
const reverseString1 = (str) => str.split('').reverse().join('');

// using loop with push and pop
const reverseString2 = (str) => {
  const strArray = str.split('');
  const newArr = [];
  for (let i = 0; i < str.length; i++) {
    const lastItem = strArray.pop();
    newArr.push(lastItem);
  }
  return newArr.join('');
};

// looping backwards and checking error cases
function reverseString(str) {
  if (!str || str.length < 2 || typeof str !== 'string') {
    return 'Please give a valid string';
  }

  const backwards = [];
  const lastCharIndex = str.length - 1;

  for (let i = lastCharIndex; i >= 0; i--) {
    backwards.push(str[i]);
  }

  return backwards.join('');
}

console.log(reverseString1(`Hi! My name is Durgesh`));
console.log(reverseString2(`Hi! My name is Durgesh`));
console.log(reverseString(`Hi! My name is Durgesh`));
