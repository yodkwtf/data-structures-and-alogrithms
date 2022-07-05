const compressBoxes = (boxes1, boxes2) => {
  boxes1.forEach((box) => console.log(box)); // O(m)

  boxes2.forEach((box) => console.log(box)); // O(n)
};

// Since the time complexity depends on 2 different inputs we add them to get the final one
// O(m) + O(n) -> O(m+n)
