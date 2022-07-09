const strings = ['a', 'b', 'c', 'd'];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

// access
strings[2]; // O(1)

//push
strings.push('e'); // O(1) or some rare times O(n) for dynamic arrays

//pop
strings.pop(); // O(1)
strings.pop();

//unshift
strings.unshift('x'); // O(n) -> since we loop over the array to update indices of other items

//splice
strings.splice(2, 0, 'alien'); // O(n) -> since we loop over the array to update indices of other items

console.log(strings);
