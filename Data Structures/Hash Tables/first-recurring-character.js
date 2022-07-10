/**
 * GOOGLE"S QUESTION
 * > Create a func that takes a list of characters and returns the first recurring character in that list.
 *
 * Eg:
 * firstRecurringCharacter([2,5,1,2,3,5,1,2,4]) -> 2
 * firstRecurringCharacter([2,1,1,2,3,5,1,2,4]) -> 1
 * firstRecurringCharacter([2,3,4,5]) -> undefined
 * */

function firstRecurringCharacter(arr) {
  // type checks

  let hashTable = {};

  for (let i = 0; i < arr.length; i++) {
    // if (hashTable[arr[i]]) { // won't work for 0 since it's falsy
    if (hashTable[arr[i]] !== undefined) {
      return arr[i];
    } else {
      hashTable[arr[i]] = arr[i];
    }
  }

  return undefined;
}

console.log(firstRecurringCharacter([2, 5, 1, 2, 3, 5, 1, 2, 4]));
console.log(firstRecurringCharacter([0, 1, 0, 2, 3, 2, 1, 2, 4]));
console.log(firstRecurringCharacter([2, 3, 4, 5]));
