class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  isEmpty() {
    return this.length === 0;
  }

  peek() {
    return this.first;
  }

  // lets assume we move from left to right (first -> second -> ... -> last)
  enqueue(value) {
    const newNode = new Node(value);

    if (this.isEmpty()) {
      this.first = newNode;
      this.last = newNode;
    } else {
      // point last node's `next` to newNode to add
      this.last.next = newNode;
      // makes newNode as new last item
      this.last = newNode;
    }

    this.length++;
    return this;
  }

  dequeue() {
    if (this.length <= 1) {
      this.first = null;
      this.last = null;
      this.length = 0;
    } else {
      // make the second item as the first
      this.first = this.first.next;
      this.length--;
    }
    return this;
  }
}

const myQueue = new Queue();

myQueue.enqueue('one'); // [one]
myQueue.enqueue('two'); // [one -> two]
myQueue.enqueue('three'); // [one -> two -> three]

console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.isEmpty());

myQueue.dequeue(); // [two -> three]
myQueue.dequeue(); // [ three ]
myQueue.dequeue(); // null
myQueue.dequeue(); // null

console.log('*********');
console.log('AFTER POPPING');
console.log('*********');

console.log(myQueue);
console.log(myQueue.peek());
console.log(myQueue.isEmpty());
