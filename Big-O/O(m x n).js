const createPairs = (arr1, arr2) => {
  arr1.forEach((letter) => {
    // O(m)
    arr2.forEach((num) => console.log([letter, num])); // O(n)
  });
};

const lettersArr = ['a', 'b', 'c', 'd'];
const numbersArr = [1, 2, 3];

createPairs(lettersArr, numbersArr);

// Each operation in first array runs m times and in turn makes each operation in arr2 run n times
// Thus, time complexity = O(m * n)

// Basically every iteration denoted by `m` runs `n` times
