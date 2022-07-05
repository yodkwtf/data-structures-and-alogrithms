//-> Constant Time: O(1)
// As the no. of inputs changes, the time taken to execute the function remains constant since the no. of operations remain the same.

const boxes = ['a', 'b', 'c', 'd', 'e'];

const logFirstBox = (boxes) => {
  console.log(boxes[0]); // O(1)
};

const logTwoBoxes = (boxes) => {
  console.log(boxes[0]); // O(1)
  console.log(boxes[1]); // O(1)
};

logFirstBox(boxes); // O(1)
logTwoBoxes(boxes); // O(2)

// Now no. matter the no. of boxes in the array, the time taken to execute the function remains constant.
