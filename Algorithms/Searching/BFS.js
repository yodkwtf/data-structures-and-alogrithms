class Node {
  constructor(value) {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          //Left
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          //Right
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  lookup(value) {
    if (!this.root) {
      return false;
    }
    let currentNode = this.root;
    while (currentNode) {
      if (value < currentNode.value) {
        currentNode = currentNode.left;
      } else if (value > currentNode.value) {
        currentNode = currentNode.right;
      } else if (currentNode.value === value) {
        return currentNode;
      }
    }
    return null;
  }

  // iterative approach
  breadthFirstSearch() {
    // get root node & push it queue
    let currentNode = this.root;
    let list = [];
    let queue = []; // FIFO -> starts with root, then it's left child & then right child
    queue.push(currentNode); // [root]

    while (queue.length > 0) {
      // get first item in queue & remove it from queue so next iteration starts from next item
      currentNode = queue.shift();

      // push current item we're on to the final result array
      list.push(currentNode.value);

      // push any current item's left or right child to the queue
      if (currentNode.left) {
        queue.push(currentNode.left);
      }
      if (currentNode.right) {
        queue.push(currentNode.right);
      }
    }
    return list;
  }

  // recursive approach
  breadthFirstSearchR(queue, list) {
    if (!queue.length) {
      return list;
    }

    // get leftest item from queue & also remove it from queue
    const currentNode = queue.shift();

    // add it to result array
    list.push(currentNode.value);

    // check & add child items of currentNode to end of the queue
    if (currentNode.left) {
      queue.push(currentNode.left);
    }
    if (currentNode.right) {
      queue.push(currentNode.right);
    }

    // perform the same operations for every item in queue one by one until it's empty
    return this.BreadthFirstSearchR(queue, list);
  }
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log('BFS', tree.BreadthFirstSearch());
console.log('BFS', tree.BreadthFirstSearchR([tree.root], []));

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
