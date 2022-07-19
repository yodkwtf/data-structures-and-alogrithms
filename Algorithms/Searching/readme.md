## Searching & Traversals

**Searching** is one of the most important things in computers. It's basically everywhere in all systems, all apps, all the major companies use it one form or another.

**Traversals** are similar to searching but instead of finding one element at some index, we want to visit all the elements atleast once and perform some kind of operation on them. They are done with more complex data structures like Trees, Graphs, etc.

#### Linear Search

The most basic form of searching where we compare every element sequentially (one by one) to find the target element. It's worse case time complexity is O(n) and hence it's the most efficient algorithm.

#### Binary Search

Binary search is performed with the sorted list where we choose a mid value in that list and compare it with the target element. Based on the outcome, we neglect the other half and repeat the process with the selected half by choosing a mid value in that.
This is basically Divide and Conquer method and helps improve time complexity to O(log n).

Even if we have an unsorted array, it's believed that sorting it first and then performing binary search would still be more efficient than doing linear search.

#### Breadth First Search (BFS)

BFS is a method of traversal where we start at the root node and then move left to right, level by level. We can't move to a new level until all the nodes at that level are traversed.

It uses additional memory since we have to keep track of the child nodes coming up on next level. It uses queues for this tracking process.

#### Depth First Search (DFS)

DFS is also a traversal method which follows a different approach where we go as deep as we can for a particular node and it's sub children and once we reach a leaf node, we come back to the parent to check other sides to traverse. This process keeps repeating until we traverse all the nodes of the data structure.

#### BFS vs DFS

BFS is used when target is at top level and close to the node. We use BFS to calculate the shortest path to a node which is a common mechanism used by recommendation engines.

DFS is used when target is very deep or we need to figure out "Does the path exist?". It just like a maze where we check a path by going as deep as we can and return if that leads to a dead end. It takes less memory but can get really slow if we're going very very deep.

#### PreOrder, InOrder, and PostOrder

These are 3 different methods we can use for DFS where we follow a specific patter/principle at every node based on which of these algorithms we're using.

PreOrder -> node |Left SubChild | Right SubChild
InOrder -> Left SubChild | node | Right SubChild
PostOrder -> Left SubChild | Right SubChild | node

_node_ means we print that node
_Left_ subchild means we look for any possible child nodes on left and move to them if they exist
_Right_ subchild means we look for any possible child nodes on right and move to them if they exist

Then once we reach a new node we perform the pattern again at that node.

#### Graph Traversals

Graphs are the most used data structure to mimic read world data. We use BFS and DFS for graph traversals as well.

#### Dijkstra + Bellman Ford Algorithm

Just like BFS, these 2 algorithms are used to find the shortest path but unlike BFS they also account the edge of the graph vertices while finding shortest path.

Just like traffic can affect the routes on a map, edges and their values can do the same. Hence, if we have a weighted graph we should b/w one of these 2.

**Bellman Ford** - It can also consider negative edges while computing shortest path. Although it's very efficient with the worst case time complexity of O(n^2).

**Dijkstra** - Although it can't consider negative edges but it's faster than Bellman Ford algorithm for computing shortest path and has a better time complexity.

## Contents

- [Linear Search](linear-search.js)
- [Breadth First Search (BFS)](BFS.js)
- [Depth First Search (DFS)](DFS.js)
- [BFS vs DFS - Examples](BFS-vs-DFS.js)
