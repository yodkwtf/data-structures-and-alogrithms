const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

// Time Complexity -> O(n^2)
// Space Complexity -> O(1)
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        let greaterValue = arr[j];
        let smallerValue = arr[j + 1];
        arr[j] = smallerValue;
        arr[j + 1] = greaterValue;
      }
    }
  }

  return arr;
}

// For every element in the array we run one loop where j starts from 0 and we compare it with it's next element (j+1). And then we keep incrementing j by 1
// So for 99, we run a loop where we compare 99 & 44 first, then j increments so we compare whatever came of the 99 & 44 to index 1 (j now) with whatever is present at index 2 (j+1)

console.log(numbers);
console.log(bubbleSort(numbers));
