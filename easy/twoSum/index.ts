function twoSum(nums: number[], target: number): number[] {
  for (let i = 0; i < nums.length; i += 1) {
    for (let j = nums.length; j > i; j -= 1) {
      if (nums[i] + nums[j] === target) return [i, j];
    }
  }
}
