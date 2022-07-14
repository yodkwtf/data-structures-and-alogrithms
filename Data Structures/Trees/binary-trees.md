## Binary Trees

In binary trees, each node can only have 0-2 child nodes where each child node represents a state.

There are 3 types of Binary Trees:

1. Full Binary Tree - Each node can only have 0 or 2 child nodes
2. Complete Binary Tree - Child nodes are added only in the _top-bottom_ and _left-right_ approach
3. Perfect Binary Tree - All leave nodes are on the same level; Combination of the first 2 trees

The **Perfect Binary Tree** allows us to have the Big-O Notation of **O(log N)**

## Binary Search Tree

It is a subset of Binary Tree, great for searching. Here all child nodes to right of the parent node should be greater than their respective parent node and similarly, all child node to left of the parent node should be lesser than parent node.

#### Time Complexities

| Operations | Time Complexity |
| :--------: | :-------------: |
|   lookup   |    O(log N)     |
|   insert   |    O(log N)     |
|   delete   |    O(log N)     |

This is so great because we don't iterate over all the nodes here, we use the divide & conquer method to make a decision at every node to move right or left.

#### Balanced vs Unbalanced Trees

This happens when all the child nodes keep getting added at one side of the parent node and essentially the tree basically ends up like a Linked List (try to visualize a linear branch). This makes the Big-O change to O(n) which is not at all ideal.

Hence we should always try to keep a balanced tree.

For the real world, there are trees which automatically balance themselves. For eg:

- AVL Trees
- Red Black Trees
