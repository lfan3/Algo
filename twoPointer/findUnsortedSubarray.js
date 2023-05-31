/**
* @param {number[]} nums
* @return {number}
* 笨方法，先排序，再看差别。
*/
var findUnsortedSubarray = function(nums) {
  const m = nums.map(v=>v);
  nums.sort((a,b)=>a-b);
  let firstNum=false;
  let min = -1;
  let max=-1;
  for(let i=0; i<nums.length; i++){
    if(nums[i] !== m[i] && !firstNum){
      min = i;
      firstNum = true;
    }else if(nums[i] !== m[i] ){
      max = Math.max(max, i);
    }
  } 
  if(!firstNum) return 0;
  return max-min+1;
};
// 这个方法 好聪明，但是难想。把arr 想成 A B C三段。
// A段的数字都小于 B和C段。从右边递减，如果不是递减就可能是B端的左边界，最后一个不是递减的就是B段的左边界
// C段的数字都大于 B和A段。从左边递增，如果不是递增就可能是B段的有边界，最后不是递增的就是B段的有边界

var findUnsortedSubarrayTwoPointer = (nums)=>{
  let i = 0;
  // 判断是否有递减的情况
  // !Number.MIN_VALUE; is the smallest positive number
  // let max = Number.MIN_VALUE;
  // let min = Number.MAX_VALUE;
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  let right = -1;
  let left = -1;
  const len = nums.length;
  
  for(i=0; i<len; i++){
    if(max > nums[i]){
      right = i;
    }else{
      max = nums[i];
    }
    if(min<nums[len-i-1]){
      left = len-i-1;
    }else{
      min = nums[len-1-i];
      console.log("min",min)
    }
  }
  return right == -1 ? 0 : right - left + 1;
}
const nums =  [2,6,4,8,10,9,15]
const nums1 = [1,2,3,4]
const nums2 = [1,1,1,1];
const nums3 = [-1,-1,-1,-1];
const nums4 = [1]
const nums5 = [2,3,4,7,10,9,6];
// ：你只需要对 [6, 4, 8, 10, 9] 进行升序排序，那么整个表都会变为升序排序。
const r = findUnsortedSubarrayTwoPointer(nums);
console.log("r",r)