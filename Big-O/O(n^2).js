//-> Quadratic Time: O(n^2)
// As the no. of inputs changes, the time taken to execute the function increases significantly

const printAllNumsAndAllPairSums = (numbers) => {
  console.log('Printing numbers individually:');

  numbers.forEach((num) => console.log(num)); // O(n)

  console.log('Each number add with every other number:');

  numbers.forEach((currentNum) => {
    // O(n*n)
    // O(n)
    numbers.forEach((otherNum) => {
      console.log(`Add ${currentNum} with ${otherNum} `, currentNum + otherNum); // O(n)
    });
  });
};

printAllNumsAndAllPairSums([1, 2, 3, 4]);

// Hence the Big O of the function is O(n + n^2).
// Applying Rule 4, dropping non determinant terms, we get O(n^2).
