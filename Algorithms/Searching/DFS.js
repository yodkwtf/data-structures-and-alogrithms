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

  DFTPreOrder() {
    return traversePreOrder(this.root, []);
  }

  DFTPostOrder() {
    return traversePostOrder(this.root, []);
  }

  DFTInOrder() {
    return traverseInOrder(this.root, []);
  }
}

// each node performs nLR
function traversePreOrder(node, list) {
  // push node to result
  list.push(node.value);

  // check if it has any child in left & start the same process on it until we reach leaf node
  if (node.left) {
    traversePreOrder(node.left, list);
  }

  // check if it has any child in right & start the same process on it until we reach leaf node
  if (node.right) {
    traversePreOrder(node.right, list);
  }
  return list;
}

// each node performs LnR
function traverseInOrder(node, list) {
  if (node.left) {
    traverseInOrder(node.left, list);
  }
  list.push(node.value);
  if (node.right) {
    traverseInOrder(node.right, list);
  }
  return list;
}

// each node performs LRn
function traversePostOrder(node, list) {
  if (node.left) {
    traversePostOrder(node.left, list);
  }
  if (node.right) {
    traversePostOrder(node.right, list);
  }
  list.push(node.value);
  return list;
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);

console.log('DFS pre', tree.DFTPreOrder());
console.log('DFS in', tree.DFTInOrder());
console.log('DFS post', tree.DFTPostOrder());

//     9
//  4     20
//1  6  15  170

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
