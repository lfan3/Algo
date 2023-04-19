var maxSubArrayOptimized = function(nums) {
  // optimize: we just need one var to keep the pre is ok
  let pre = nums[0]
  let max = nums[0];
  for(let i=1; i<nums.length; i++){
      const s = pre + nums[i];
      pre = Math.max(s, nums[i]);
      max = Math.max(pre, max);
  }
  return max;
};

var maxSubArray = function(nums) {
  const arr = Array(nums.length);
  // optimize: we just need one var to keep the pre is ok like on above
  arr[0] = nums[0];
  let max = nums[0];
  for(let i=1; i<nums.length; i++){
      const s = pre + nums[i];
      pre = Math.max(s, nums[i]);
      max = Math.max(pre, max);
  }
  return max;
};