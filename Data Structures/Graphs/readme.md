## Graphs

Graphs are a set of values related in a pair-wise manner. They are one of the most useful and most used data structures when modeling real-world relationships.

They may look something like this in visuals -

```bash
6
  \
    4 -- 5
    |    |  \
    |    |    1
    |    |  /
    3 -- 2
```

- Each item in graph is called a **node** or a vertex (1, 2, 3,...,6 here)
- Nodes are to one another connected with **edges**

Example of Graphs-

- How the Internet works
- Roads connecting different places
- Amazon's recommendation system uses it

#### Types of Graphs

There a lot of different types of graphs such as:

1. Directed - only goes in one direction
2. Undirected - can move back&forth b/w nodes
3. Unweighted - nodes carry info
4. Weighted - nodes as well as edges carry info
5. Cyclic - nodes connected in a circular manner
6. Acyclic - nodes aren't in a circular manner

#### Build Graphs

Graphs are built on top of other data structures. They can be represented using arrays or hash maps in a no. of ways like:

- Edge List
- Adjacent List
- Adjacent Matrix

## Contents

- [Graphs Implementation](graphs-implementation.js)
