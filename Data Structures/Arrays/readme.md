## Arrays

Arrays are used to organize items sequentially, one after another in memory.

There are 2 types of array:

- Static -> Size(space in memory) is fixed and specified beforehand
- Dynamic -> Allows us to copy and rebuild arrays at new location with more memory to store new items

#### Time Complexities

|    Methods    |  Time Complexity   |
| :-----------: | :----------------: |
| lookup/access |        O(1)        |
|  push/append  | O(1) / O(n) (rare) |
|    insert     |        O(n)        |
|    delete     |        O(n)        |

#### When to Use Arrays?

|     Pros      |        Cons         |
| :-----------: | :-----------------: |
| Fast lookups  |    Slow inserts     |
| Fast push/pop |    Slow deletes     |
|    Ordered    | Fixed size (static) |

#### Contents

- [Arrays](./arrays.js)
- [Implementing Arrays](./implementing-arrays.js)
- [Reverse a String](./reverse-a-string.js)
- [Merge Sorted Arrays](./merge-sorted-arrays.js)
