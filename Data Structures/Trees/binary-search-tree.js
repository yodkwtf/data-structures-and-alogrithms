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
        // Left
        if (value < currentNode.value) {
          // if there's nothing on left node
          if (!currentNode.left) {
            currentNode.left = newNode;
            break;
          } else {
            // if there is a left node, make it as the currentNode so we can do check on it on next iteration
            currentNode = currentNode.left;
          }
        }
        // Right
        else {
          // if there's no right node to currentNode
          if (!currentNode.right) {
            currentNode.right = newNode;
            break;
          } else {
            currentNode = currentNode.right;
          }
        }
      }
    }
  }

  lookup(value) {
    // check if root is empty
    if (!this.root) {
      return null;
    }

    // if we're looking for root only
    if (value === this.root.value) {
      return this.root;
    }

    let currentNode = this.root;

    while (currentNode) {
      // if value is eq to current root
      if (value === currentNode.value) {
        return currentNode;
      }

      // if value is less than current parent
      else if (value < currentNode.value) {
        currentNode = currentNode.left;
      }

      // if value is more than current root
      else if (value > currentNode.value) {
        currentNode = currentNode.right;
      }
    }

    return null;
  }

  // TODO- remove
}

const tree = new BinarySearchTree();
tree.insert(9);
tree.insert(4);
tree.insert(6);
tree.insert(20);
tree.insert(170);
tree.insert(15);
tree.insert(1);
// console.log(JSON.stringify(traverse(tree.root)));

console.log(tree.lookup(9));

/**
 *         9
 *       /  \
 *     4     20
 *   /  \   /  \
 *  1   6  15   170
 */

function traverse(node) {
  const tree = { value: node.value };
  tree.left = node.left === null ? null : traverse(node.left);
  tree.right = node.right === null ? null : traverse(node.right);
  return tree;
}
