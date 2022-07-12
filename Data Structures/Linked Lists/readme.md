## Linked Lists

Linked List is a list which is linked.

They are null terminated, i.e., the last node always points to null. They are a set of nodes (elements) where each node points to the next node in line and also stores value of data. This value can be of any data type.

#### Types

1. **Singly Linked List**: Each node points to the next node in line
2. **Doubly Linked List**:
   - Each node points to the next as well as the previous node
   - Allow us to traverse back to front
   - Searching can be fast and lookup can be O(n/2)
   - More memory though :/

Linked Lists are scattered in the memory just like hash tables but they are somewhat ordered since each node points to another node. If we're looking for a specific node, we can't access it using the index, we'd have to traverse the whole list.

#### Singly vs/s Doubly Linked Lists

- Singly should be used when memory is lesser or we want faster insertion/deletion or not a lot of searching
- Doubly is better suited when there's no memory limitation and good search is required, from back too.

Interviews mostly deal with Singly Linked Lists only. Double can be asked as a theoretical question.

#### Creating Linked Lists

Some languages already have built-in Linked Lists while some don't. We can create our own Linked Lists if we want using classes and objects. We have done the same here using Javascript.

#### Time Complexities

| Operations | Time Complexity |
| :--------: | :-------------: |
|  prepend   |      O(1)       |
|   append   |      O(1)       |
|   lookup   |      O(n)       |
|   insert   |      O(n)       |
|   delete   |      O(n)       |

## Contents

- [Singly Linked Lists](./singly-linked-list.js)
- [Doubly Linked Lists](./doubly-linked-list.js)
