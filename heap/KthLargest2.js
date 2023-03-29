/**
 * second solution
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
  this.array = nums;
  this.k = k;
};

/** 
* @param {number} val
* @return {number}
*/
KthLargest.prototype.add = function(val) {
  this.array.push(val);
  this.array.sort((a,b)=>b-a)
  return this.array[this.k - 1]
};
