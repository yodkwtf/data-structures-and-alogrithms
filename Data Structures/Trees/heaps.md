## Heaps

When we talk about heaps we mainly talk about **Binary Heaps**. A Binary Heap is just a **complete binary tree**.
They can be of 2 types type

1. A **min. heap** is a tree where each child node is lesser than it's parent node.
2. A **max. heap** is a tree where each child node is greater than it's parent node.

#### Time Complexities

| Operations | Time Complexity |
| :--------: | :-------------: |
|   lookup   |      O(n)       |
|   insert   |    O(log N)     |
|   delete   |    O(log N)     |

Lookups is O(n) since they are less ordered than Binary Search Tree and we can't really use _Divide & Conquer_ here, we'd have to iterate over all the nodes.

#### Priority Queues

Binary heaps are used a lot with Priority Queues. These are queues that instead of following _FIFO_ follow a priority rule where operations depend on the priority of the node.

#### When to Use Binary Heaps?

Problems that state something to do with **the largest** or **the smallest** of something may use heaps.

Some Points to Consider:

- Search and lookups are slow
- Fast insertion (in most cases)
- Allows us performing priority based operations

Now, since they follow _T-B_ and _L-R_ approach they are always balanced. We can implement them using arrays.
