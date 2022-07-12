## Linked Lists

Linked Lists are a list which is linked. They are a set of nodes (elements) where each node points to the next node in line and also stores value of data. This value can be of any data type.

They are null terminated, i.e., the last node always points to null.

Linked Lists are scattered in the memory just like hash tables but they are ordered since each node points to another node. If we're looking for a specific node, we can't access it using, we'd have to traverse the whole list.

#### Time Complexities

| Operations | Time Complexity |
| :--------: | :-------------: |
|  prepend   |      O(1)       |
|   append   |      O(1)       |
|   lookup   |      O(n)       |
|   insert   |      O(n)       |
|   delete   |      O(n)       |

## Contents

- [Creating Our Own Linked Lists](./create-linked-list.js)
