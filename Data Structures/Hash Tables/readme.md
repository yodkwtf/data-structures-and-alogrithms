## Hash Tables

Hash Tables are basically a way to store data in key-value pairs. They have different names based on different languages like objects, dictionaries, maps, etc.

#### Hash Function

Whenever we create a new key to store some value, behind the scenes that key is passed through a hash function which generates a hashed string output which is used as an address to store that key in memory.

Since Hash Tables are there in almost every language, the hash functions are created in a way that the time complexity is really good -> O(1). Otherwise, do hash every key via a hash function would've taken a long time theoretically.

#### Time Complexities

Since Hash Tables aren't ordered, we don't have to shift other data when access or inserting and hence time complexity is really low.

| Operations | Time Complexity |
| :--------: | :-------------: |
|   lookup   |      O(1)       |
|   search   |      O(1)       |
|   insert   |      O(1)       |
|   delete   |      O(1)       |

#### Why Hash Tables?

- Search is very fast since we don't have to loop like we did in arrays
- Fast inserting since no shifting of other data
- Flexible keys (nums, strings, etc.)

#### Downsides

- Unordered
- Getting all keys requires looping over entire storage, even the empty spaces

> Most of the times when we optimize time complexities and reduce it, we end up increasing the space complexities of the function. It can observed in many questions when we create a new hashTable to store data while we loop over it.

## Contents

- [Hash Tables](./hash-tables.js)
- [Implementing Hash Tables](./implementing-hash-tables.js)
- [First Recurring Character](./first-recurring-character.js)
