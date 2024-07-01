## Queues

Queues are just like their English meaning. They can be imagined as a line of people to ride a roller coaster. First person to come goes in the first.

The method is called **FIFO (First In First Out)**

Basically, the item that was added the last (the top plate) is removed the first.

Examples -

- Booking Uber/movies, etc.
- Printing items from different machines using same printer. The first machine on which print button was pressed will print first.

#### How to create Queues?

Queues are not in-built but we can create our own using linked lists. We can also create them using arrays but it is inefficient since when we remove/add an item to arrays there is a shifting of other items, making it slow whereas in case of a linked list, we only need to change the pointer.

#### Time Complexities

| Operations | Time Complexity |                Description                |
| :--------: | :-------------: | :---------------------------------------: |
|  enqueue   |      O(1)       |         pushes item to queue end          |
|  dequeue   |      O(1)       |          removes the first item           |
|    peek    |      O(1)       |            view the first item            |
|   lookup   |      O(n)       | we don't do it cuz it requires traversing |
