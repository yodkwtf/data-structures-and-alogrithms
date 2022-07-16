let count = 0;

const inception = () => {
  if (count > 3) {
    console.log(`${count} hour: I WOKE UP!!!`);
    return; // will stop recursion (base case)
  }

  console.log(`${count} hour: Still dreaming...`);
  count++;

  return inception();
};

inception();
