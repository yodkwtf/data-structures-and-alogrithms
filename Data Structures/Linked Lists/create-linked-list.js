// creating my own linked list

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  // add node to end (see image in directory to understand better)
  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode; // overwrites tail.next -> hence, overwrites head.text
    this.tail = newNode; // makes newly added item as the tail
    this.length++;
  }

  // add at start
  prepend(value) {
    const newNode = new Node(value);

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

    newNode.next = leader.next;
    leader.next = newNode;

    this.length++;
  }

  // remove value from given index
  remove(index) {
    // check params
    if (index === 0) {
      this.head = this.head.next;
      return this.length--;
    }

    const leader = this._traverseToIndex(index - 1);
    const nodeToRemove = leader.next;

    if (index === this.length - 1) {
      leader.next = null;
      this.tail = leader;
    } else {
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

const myLinkedList = new LinkedList(10); // 10

myLinkedList.append(5); // 10 -> 5
myLinkedList.append(16); // 10 -> 5 -> 16
myLinkedList.prepend(3); // 3 -> 10 -> 5 -> 16
// myLinkedList.insert(200, 95); // 3 -> 10 -> 5 -> 16 -> 95
myLinkedList.insert(2, 35); // 3 -> 10 -> 35 -> 5 -> 16
myLinkedList.remove(3); // 3 -> 10 -> 35 -> 16
myLinkedList.remove(3); // 3 -> 10 -> 35f

console.log(myLinkedList.printList());
