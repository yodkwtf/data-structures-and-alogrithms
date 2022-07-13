class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  // return the item at top
  peek() {
    return this.top;
  }

  // add item at top
  push(value) {
    const newNode = new Node(value);

    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      newNode.next = this.top;
      this.top = newNode;
      /**
       * In the above case we are assuming the `top` is the beginning of the list whereas `bottom` is the tail of the list, here push and pop will be O(1) since we start at the top
       *
       * If we make the bottom as beginning and top as the tail, push and pop will be O(n) since we'll need to traverse from bottom(head) to top(tail). It will look something like
       *
       * this.top.next = newNode
       * this.top = newNode
       */
    }

    this.length++;
    return this;
  }

  pop() {
    if (this.length <= 1) {
      this.top = null;
      this.bottom = null;
      this.length = 0;
    } else {
      this.top = this.top.next;
      this.length--;
    }
  }

  isEmpty() {
    return this.length === 0;
  }
}

const myStack = new Stack();

myStack.push('google');
myStack.push('facebook');
myStack.push('microsoft');

console.log(myStack);
console.log(myStack.peek());

myStack.pop();
myStack.pop();
myStack.pop();
myStack.pop();

console.log('*********');
console.log('AFTER POPPING');
console.log('*********');

console.log(myStack);
console.log(myStack.peek());
console.log(myStack.isEmpty());
