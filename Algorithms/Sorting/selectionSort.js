const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time Complexity -> O(n^2)
// Space Complexity -> O(1)
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;
    let initialSmallest = arr[i];

    for (let j = i + 1; j < arr.length; j++) {
      // check if every next element is less than the current smallest element which get by using current smallest element's index
      // eventually we get the smallest element of the list and store it's index
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    // the index we're looping for now takes the value of the smallest element
    arr[i] = arr[indexOfMin];
    // the place we found the smallest element now takes the value of assumed smallest from the start of the iteration
    arr[indexOfMin] = initialSmallest;
  }

  return arr;
}

console.log(numbers);
console.log(selectionSort(numbers));
