var beasts = ['Centaur', 'Godzilla', 'Mosura', 'Minotaur', 'Hydra', 'Nessie'];

beasts.indexOf('Godzilla');

beasts.findIndex(function (item) {
  return item === 'Godzilla';
});

beasts.find(function (item) {
  return item === 'Godzilla';
});

beasts.includes('Godzilla');

// By default, these built-in methods perform linear search, that is, they visit each item one by one and compare it with the target element.
// Time Complexity -> O(n)
