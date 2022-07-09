/**
 * IMPLEMENTING AN ARRAY
 * It means creating an array on our own without using the built-in data structure `array` in javascript
 * */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item; // add item to index = length
    this.length++; // inc length and hence index for the next item to add
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length--;
    return lastItem;
  }

  delete(index) {
    // O(n)
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1]; // this loop will shift all items to one left except for the last item, that'll remain as it is (THINK WHY)
    }
    delete this.data[this.length - 1]; // so we remove the last item, rest of them already shifted
    this.length--;
  }
}

// create a new array
const newArray = new MyArray();
console.log(newArray);

newArray.push('hey'); // ['hey']
newArray.push('hello'); // ['hey', 'hello']
newArray.push('ssup'); // ['hey', 'hello', 'ssup']
newArray.push('hi'); // ['hey', 'hello', 'ssup', 'hi']
newArray.delete(2); // ['hey', 'hello', 'hi']
newArray.push('eat'); // ['hey', 'hello', 'h1', 'eat']
newArray.push('yo'); // ['hey', 'hello', 'h1', 'eat', 'yo']
newArray.delete(3); // ['hey', 'hello', 'h1', 'yo']

console.log(newArray);

// newArray.pop();
// newArray.pop();

console.log(newArray);
