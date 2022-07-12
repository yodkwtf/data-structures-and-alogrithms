// creating my own linked list

class Node {
  constructor(value) {
    this.value = value;
    (this.prev = null), (this.next = null);
  }
}

class DoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      prev: null,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // add node to end (see image in directory to understand better)
  append(value) {
    const newNode = new Node(value);

    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  // add at start
  prepend(value) {
    const newNode = new Node(value);

    this.head.prev = newNode;
    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

  // insert values in b/w
  insert(index, value) {
    if (index === 0) {
      this.prepend(value);
    }
    if (index >= this.length) {
      this.append(value);
    }

    const newNode = new Node(value);
    const leader = this._traverseToIndex(index - 1);

    newNode.prev = leader;
    newNode.next = leader.next;
    leader.next.prev = newNode;
    leader.next = newNode;

    this.length++;
  }

  // remove value from given index
  remove(index) {
    // check params
    if (index === 0) {
      this.head = this.head.next;
      this.head.prev = null;
      return this.length--;
    }

    const leader = this._traverseToIndex(index - 1);
    const nodeToRemove = leader.next;

    if (index === this.length - 1) {
      leader.next = null;
      this.tail = leader;
    } else {
      nodeToRemove.next.prev = leader;
      leader.next = nodeToRemove.next;
    }

    this.length--;
  }

  _traverseToIndex(index) {
    //Check parameters
    let counter = 0;
    let currentNode = this.head;
    while (counter < index) {
      currentNode = currentNode.next;
      counter++;
    }
    return currentNode;
  }

  // simple print function to log list
  printList() {
    let node = this.head;
    const listItems = [];

    while (node !== null) {
      listItems.push(node.value);
      node = node.next;
    }

    return { nodes: listItems, length: this.length };
  }
}

const myLinkedList = new DoublyLinkedList(10); // 10

myLinkedList.append(5); // 10 -> 5
myLinkedList.append(16); // 10 -> 5 -> 16
myLinkedList.prepend(3); // 3 -> 10 -> 5 -> 16
// myLinkedList.insert(200, 95); // 3 -> 10 -> 5 -> 16 -> 95
myLinkedList.insert(1, 35); // 3 -> 35 -> 10 -> 5 -> 16
myLinkedList.remove(3); // 3 -> 35 -> 10 -> 16
myLinkedList.remove(3); // 3 -> 35 -> 10

console.log(myLinkedList);
