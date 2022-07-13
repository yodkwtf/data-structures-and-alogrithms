// IMPLEMENTATION 1 -> Most Simple
class Stack1 extends Array {
  peek() {
    return this[this.length - 1];
  }

  isEmpty() {
    return this.length === 0;
  }
}

// IMPLEMENTATION 2 -> Simple yet complex (popular way)
class Stack2 {
  constructor() {
    this.items = [];
  }

  push(item) {
    this.items.push(item);
  }

  pop() {
    this.items.pop();
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

// IMPLEMENTATION 3 -> Unique and complex but smart too
class Stack {
  constructor() {
    this.items = [];
    this.length = 0;
  }

  push(value) {
    this.items[this.length] = value;
    this.length++;
    return this.items;
  }

  pop() {
    if (!this.isEmpty()) {
      this.items.splice(this.length - 1);
      this.length--;
    }
    return this.items;
  }

  peek() {
    if (this.isEmpty()) {
      return null;
    }
    return this.items[this.items.length - 1];
  }

  isEmpty() {
    return this.items.length === 0;
  }
}

const myStack = new Stack();

// [bottom -> top]
myStack.push('google'); // ['google]
myStack.push('facebook'); // ['google', 'facebook']
myStack.push('microsoft'); // ['google' , 'facebook' , 'microsoft']

console.log(myStack);
console.log(myStack.peek());
console.log(myStack.isEmpty());

myStack.pop(); // [ 'google', 'facebook' ]
myStack.pop(); // [ 'google' ]
myStack.pop(); // []
myStack.pop(); // []

console.log('*********');
console.log('AFTER POPPING');
console.log('*********');

console.log(myStack);
console.log(myStack.peek());
console.log(myStack.isEmpty());
