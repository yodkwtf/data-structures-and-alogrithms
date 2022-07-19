//0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233...
let calculations = 0;
function fibonacci(n) {
  calculations++;
  if (n < 2) {
    return n;
  }
  return fibonacci(n - 1) + fibonacci(n - 2); //O(2^n) since we calc it till fb(0) for every number
}

// O(n) since we only calc fibonacci for every num only once and store it cache object to access later
function fibonacciMaster(n, cache = {}) {
  calculations++;
  if (n in cache) {
    return cache[n];
  } else if (n < 2) {
    return n;
  } else {
    cache[n] = fibonacciMaster(n - 1, cache) + fibonacciMaster(n - 2, cache);
    return cache[n];
  }
}

// console.log('Slow', fibonacci(25)); // 242785 calls to function
console.log('Fast', fibonacciMaster(25)); // 49 function calls
console.log('we did ' + calculations + ' calculations');
