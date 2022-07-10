// HASH TABLES aka Objects | Dictionary | Maps | Hash maps
let user = {
  name: 'john',
  age: 54,
  isMagician: true,
  scream: function () {
    console.log('AAHHHHH!');
  },
};

// access
console.log(user.age); // O(1)
user.scream(); // O(1)

// insert
user.spell = 'abbra kadabra'; // O(1)
console.log(user);
