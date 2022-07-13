/**
 * EXERCISE - CREATE A METHOD ON TO REVERSE THE LINKED LIST
 * Meaning - the tail becomes the head, the head becomes the tail and all the other elements get reversed in direction/order too
 */

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

  append(value) {
    const newNode = new Node(value);

    this.tail.next = newNode;
    this.tail = newNode;
    this.length++;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head = newNode;
    this.length++;
  }

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

  reverse() {
    let currentNode = this.head;
    let prevNode = null;

    while (currentNode !== null) {
      // get the next node right now
      const curNextNode = currentNode.next;

      // point the currentNode to prev element instead of next (basically, reverse the pointer)
      currentNode.next = prevNode;

      // inc prevNode by one element for next iteration
      prevNode = currentNode;

      // inc currentNode by one element for next iteration
      currentNode = curNextNode;
    }
    /**
     * At this point we have reversed the list but the head and tail are still the same
     *  (h)           (t)                (h)            (t)
     * [1 -> 2 -> 3 -> 4] has changed to [1 <- 2 <- 3 <- 4]
     *
     * Hence, we must update the head and tail too
     */

    // update head and tail's value
    this.tail = this.head; // we update this.head.next to null in first iteration of loop
    this.head = prevNode; // prevNode is last element at the end of the loop

    return this;
  }

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
myLinkedList.insert(2, 35); // 3 -> 10 -> 35 -> 5 -> 16

console.log(myLinkedList.printList()); // 3 -> 10 -> 35 -> 5 -> 16

myLinkedList.reverse(); // 3 <- 10 <- 35 <- 5 <- 16

console.log('REVERSED');
console.log(myLinkedList.printList());
