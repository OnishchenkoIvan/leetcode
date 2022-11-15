var pivotIndex = function (nums) {
  for (let i = 0; i < nums.length; i += 1) {
    const first = nums.slice(0, i).reduce((acc, n) => (acc += n), 0);
    const second = nums
      .slice(i + 1, nums.length)
      .reduce((acc, n) => (acc += n), 0);
    if (first === second) return i;
  }
  return -1;
};

console.log(pivotIndex([1, 7, 3, 6, 5, 6]));
