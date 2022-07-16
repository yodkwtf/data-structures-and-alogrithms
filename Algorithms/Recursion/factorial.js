/**
 * Write two functions that finds the factorial of any number. One should use recursive, the other should just use a for loop
 *
 * 5! = 5*4*3*2*1 = 120
 * 3! = 3*2*1 = 6
 */

// recursive way
const factorialRecursive = (n) => {
  if (n < 2) {
    return 1;
  }

  return n * factorialRecursive(n - 1);
};

// iterative way
function factorialIterative(n) {
  let ans = 1;

  for (let i = 1; i <= n; i++) {
    ans = ans * i;
  }

  return ans;
}

console.log(factorialIterative(4));
console.log(factorialRecursive(5));
