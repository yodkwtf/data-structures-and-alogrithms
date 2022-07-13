## Stacks

Stacks is a data structure which can be considered as a stack of plates sitting on top of each other, vertically, where we can only access the top plate.

To access the items below, we'd first have to remove the items from top one by one. This method is known as **LIFO (Last In First Out)**.

Basically the item that was added the last (the top plate) is remove the first.

Examples -

- Nested functions in programming languages
- Back buttons in browser navigation
- Undo in text editors

#### How to create Stacks?

Stacks are not in-built but we can create our own using arrays or linked lists. Both of them are ideal choices but it usually depends on the operations we need to perform.

Accessing items is faster in arrays since values are next to each other where as linked lists, unlike arrays, don't have any memory limitations.

#### Time Complexities

| Operations | Time Complexity |                Description                |
| :--------: | :-------------: | :---------------------------------------: |
|    pop     |      O(1)       |     remove the last item (top plate)      |
|    push    |      O(1)       |             add a item at top             |
|    peek    |      O(1)       |             view the top item             |
|   lookup   |      O(n)       | we don't do it cuz it requires traversing |
