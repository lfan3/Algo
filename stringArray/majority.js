/**
 * @param {number[]} nums
 * @return {number}
 */
 var majorityElement = function(nums) {
  nums.sort((a, b)=>a-b);
  let middleIndex = Math.floor(nums.length / 2);
  return nums[middleIndex]
};

const a = [1,2, 3,3];
const n = majorityElement(a);
console.log(n)