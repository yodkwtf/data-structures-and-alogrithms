// creating my own linked list
class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = {
      value: value,
      next: null,
    };

    this.tail.next = newNode; // overwrites tail.next -> hence, overwrites head.text
    this.tail = newNode; // makes newly added item as the tail
    this.length++;
  }

  prepend(value) {
    const newNode = {
      value,
      next: this.head,
    };

    this.head = newNode;
    this.length++;
  }
}

// for reference, check the image in the directory to understand better

const myLinkedList = new LinkedList(10);

myLinkedList.append(5);
myLinkedList.append(16);
myLinkedList.prepend(3);

console.log(myLinkedList);
