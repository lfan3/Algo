const swap = require("./lib/swap");
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function(nums, k) {
  const partition = (l, r)=>{
    const pivot = nums[l];
    let ptr = l;
    // 易错 i= l+1 和 i<=r
    for(let i=l+1; i<=r; i++){
      if(nums[i] < pivot){
        // 易错：ptr 放在swap 后面
        ptr++;
        swap(nums, ptr, i);
      }
    }
    // 易错：ptr 和 l
    swap(nums,ptr, l);
    return ptr;
  }
  const findKth = (l,r)=>{
    while(l<=r){
      
    }
  }
  return partition(0, nums.length-1)
};

const a = findKthLargest([6,5,1,3,10,12]);
console.log('a',a);