/**
 * QUESTION
 * Create a function that takes 2 sorted arrays and merges them to return a new sorted array
 * Eg:
 * mergeSortedArrays([0,3,4,31], [4,6,30]) -> [0,3,4,4,6,30,31]
 */

// SOLUTIONS

// best way
function mergeSortedArrays(arr1, arr2) {
  const mergedArray = [];
  let i = 0;
  let j = 0;

  // checks
  if (arr1.length === 0) return arr2;
  if (arr2.length === 0) return arr1;

  while (i < arr1.length || j < arr2.length) {
    if (arr2[j] === undefined || arr1[i] < arr2[j]) {
      mergedArray.push(arr1[i]);
      i++;
    } else {
      mergedArray.push(arr2[j]);
      j++;
    }
  }

  return mergedArray;
}

// most simple -> spread & sort
const mergeSortedArrays1 = (arr1, arr2) =>
  [...arr1, ...arr2].sort((a, b) => a - b);

console.log(mergeSortedArrays([0, 33], [4, 6, 30, 35]));
console.log(mergeSortedArrays1([0, 3, 4, 31], [4, 6, 30]));
