const sayHi = (n) => {
  for (let i = 1; i < n; i++) {
    console.log('Hii');
  }
};

sayHi(3); // O(1) -> since we are not adding any space to the program in the function, space is constant

const sayHiNTimes = (n) => {
  let hiArr = [];
  for (let i = 1; i < n; i++) {
    hiArr[i] = 'Hi';
  }
  return hiArr;
};

sayHiNTimes(4); // O(n) -> for every iteration we're adding an element and hence space to the program
