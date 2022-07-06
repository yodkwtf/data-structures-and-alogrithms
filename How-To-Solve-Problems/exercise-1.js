//- PROBLEM STATEMENT
// Given 2 arrays, create a function that let's user know (true/false) whether these two arrays contain any common items

/**
For example:
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'i']
should return false.
----------
const array1 = ['a', 'b', 'c', 'x']
const array2 = ['z', 'y', 'x']
should return true
*/

//- SOLUTION

// input -> 2 parameters - arrays (no size limit)
// output -> return true/false

//- naive/brute force approach
// const containCommonItems = (arr1, arr2) => {
//   for (let i = 0; i < arr1.length; i++) {
//     for (let j = 0; j < arr2.length; j++) {
//       if (arr1[i] === arr2[j]) {
//         return true;
//       }
//     }
//   }

//   return false;
// };

// Time Complexity -> O(a*b)
// Space Complexity -> O(1)

// console.log(containCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i']));
// console.log(containCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x']));

//- IMPROVED SOLUTION

/*
array1 ==> obj {
  a: true,
  b: true,
  c: true,
  x: true,
}
array2[index] === obj.properties
*/

const containCommonItems = (arr1, arr2) => {
  // loop arr1 and create an object where items will be properties of object
  let map = {};

  for (let i = 0; i < arr1.length; i++) {
    const item = arr1[i];

    if (!map[item]) {
      map[item] = true;
    }
  }

  // loop through arr2 and check if item in arr2 exists on created object
  for (let j = 0; j < arr2.length; j++) {
    const element = arr2[j];

    if (map[element]) {
      return true;
    }
  }

  return false;
};

// Time Complexity -> O(a+b)
// Space Complexity -> O(a)

console.log(containCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'i'])); // false
console.log(containCommonItems(['a', 'b', 'c', 'x'], ['z', 'y', 'x'])); // true

// Since we have 2 parallel loops the time complexity will be O(a+b)
// Imagine how time complexity improved by considering 5000 inputs in array
