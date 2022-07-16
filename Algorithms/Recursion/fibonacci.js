/**
 * Given a number N return the index value of the Fibonacci sequence, where the sequence is:
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144 ...
 *
 * The pattern of the sequence is that each value is the sum of the 2 previous values, for example:
 * N=6 → 5+3 = 8
 * N=4 → 1+2 = 3
 *
 * fibonacciRecursive(6) should return 8
 */

// iterative
// O(n)
function fibonacciIterative(n) {
  let arr = [0, 1];

  for (let i = 2; i <= n; i++) {
    arr.push(arr[i - 1] + arr[i - 2]);
  }

  return arr[n];
}
console.log(fibonacciIterative(8));

// recursive
// the Big-O is exponential here, i.e., as n grows the no. of operations inc exponentially
// O(2^n) -> not ideal
const fibonacciRecursive = (n) => {
  if (n < 2) {
    return n;
  }

  // try to make a tree of it to understand
  // fb(0) = 0
  // fb(1) = 1
  // fb(2) = fb(1) + fb(0) = 1 + 0 = 1
  // fb(3) = fb(2) + fb(1) = 1 + 1 = 2
  // fb(4) = fb(3) + fb(2) = 2 + 1 = 3
  // and so on...
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
};
console.log(fibonacciRecursive(8));
