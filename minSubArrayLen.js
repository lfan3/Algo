var minSubArrayLen = function(target, nums) {
  let i=0;
  let j=0;
  let sum = 0;
  let minLen = -1;
  
  while(j<nums.length){
    while(sum<target && j<nums.length){
      sum+=nums[j];
      j++;
    }
    while(sum>=target){
      const len = j-i
      minLen = (len < minLen || minLen < 0) ? len: minLen;
      sum -= nums[i];
      i++;
    }
  
  }
  if(minLen <0){
    return 0
  }
  return minLen
};

const target = 73;
const nums = [2,3,1,2,4,3];
const m = minSubArrayLen(target, nums);
console.log("m",m);