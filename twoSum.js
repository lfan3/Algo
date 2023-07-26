var twoSum1 = function(nums, target) {
  const others = new Set();
  for(let num of nums){
   
    if(others.has(num)){
      return [target-num, num];
    }
    
    others.add(target-num);
  }
   return [];
};

// if the nums is increasing order, we can use two pointer to decrease the space to O(1)
var twoSum2 = function(nums, target) {
  let i =0, j = nums.length-1;
  while(i<j){
    const sum = nums[i] + nums[j];
    if(sum === target) return [nums[i], nums[j]]
    if(sum >target){
      j--;
    }else{
      i++;
    }
  }
  return []
}