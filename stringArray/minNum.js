
/**
 * @param {number[]} nums
 * @return {string}
 */
var minNumber = function(nums) {
  const sorted = nums.map(item => item.toString()).sort().join("");
  return sorted;
};
// todo:wrong
const l = [3,30,34,5,9]
const m = minNumber(l);
console.log(m)