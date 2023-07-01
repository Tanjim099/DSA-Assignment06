function findMaxLength(nums) {
  const map = new Map();
  map.set(0, -1);
  let count = 0;
  let maxLength = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      count--;
    } else {
      count++;
    }

    if (map.has(count)) {
      maxLength = Math.max(maxLength, i - map.get(count));
    } else {
      map.set(count, i);
    }
  }

  return maxLength;
}
const nums = [0,1];
console.log(findMaxLength(nums));