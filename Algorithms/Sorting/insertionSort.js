const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

const insertionSort = (arr) => {
  // run a loop for every element
  for (let i = 0; i < arr.length; i++) {
    let j = i + 1;

    // compare each of these element with it's prev element and keep swapping & comparing them as long as prev one isn't smaller
    // move onto the next element when prev one's smaller, it means element till that point are sorted
    while (arr[j] < arr[j - 1]) {
      const temp = arr[j];
      arr[j] = arr[j - 1];
      arr[j - 1] = temp;
      j--;
    }
  }
  return arr;
};

insertionSort(numbers);
console.log(numbers);
