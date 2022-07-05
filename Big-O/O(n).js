//-> Linear Time: O(n)
// As the no. of inputs is increased, the time taken to execute the function increases linearly.

const lake = ['nemo'];
const sea = ['nemo', 'dory', 'bruce', 'kira', 'nemo', 'dory'];
const ocean = new Array(10000).fill('nemo');

const findingNemo = (array) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === 'nemo') {
      console.log('Found Nemo');
    }
  }
};

findingNemo(lake); // runs 1 operation
findingNemo(sea); // runs 6 operations
findingNemo(ocean); // runs 10000 operations
