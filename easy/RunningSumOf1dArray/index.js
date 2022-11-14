var runningSum = function (nums) {
  return nums.reduce((acc, n) => {
    return [...acc, acc.length !== 0 ? acc[acc.length - 1] + n : n];
  }, []);
};

console.log(runningSum([1, 2, 3, 4]));
