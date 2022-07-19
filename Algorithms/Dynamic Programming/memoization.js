// normal function
function addTo80(n) {
  return n + 80;
}

addTo80(5);

// Function using caching
let cache = {};
function memoizeAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log('long time');
    const answer = n + 80;
    cache[n] = answer;
    return answer;
  }
}

// console.log(1, memoizeAddTo80(6))
// console.log(cache)
// console.log('-----------')
// console.log(2, memoizeAddTo80(6))

// let's make that better with no global scope. This is closure in javascript.
function memoizeAddTo90() {
  let cache = {};
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log('long time');
      const answer = n + 90;
      cache[n] = answer;
      return answer;
    }
  };
}

const memoized = memoizeAddTo90(); // `memoized` will always have access to the cache object using closure
console.log(1, memoized(6)); // here we are calling the internal function basically
// console.log(cache)
// console.log('-----------')
console.log(2, memoized(6));
