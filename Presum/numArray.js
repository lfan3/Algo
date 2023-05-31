"use strict";
class NumArray {
    constructor(nums) {
        this.numbers = nums;
        this.size = nums.length;
        this.preSum = Array(this.size + 1);
        this.calculePresum(nums);
    }
    calculePresum(nums) {
        let sum = 0;
        for (let i = 0; i <= this.size; i++) {
            this.preSum[i] = sum;
            sum += nums[i];
        }
    }
    sumRange(left, right) {
        return this.preSum[right] - this.preSum[left] + this.numbers[right];
    }
}
/**
* Your NumArray object will be instantiated and called as such:
* var obj = new NumArray(nums)
* var param_1 = obj.sumRange(left,right)
*/
const number = [-2, 0, 3, -5, 2, -1];
const c = new NumArray(number);
let r = c.sumRange(0, 2);
console.log(r);
r = c.sumRange(2, 5);
console.log(r);
r = c.sumRange(0, 5);
console.log(r);
