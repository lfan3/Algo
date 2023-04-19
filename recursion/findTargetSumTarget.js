var findTargetSumWays = function(nums, target) {
  const arr = [];
  const len = nums.length;
  let count = 0;
  let total = 0;
  // position i and arr to keep track
  // good to show the all permutation
  const dfs = (i, arr)=>{
    if(i>=len){
      const sum = eval(arr.join(""));
      total++;
      if(sum===target){
        count++;
      }
      return;
    }
    arr.push(`+${nums[i]}`);
    dfs(i+1, arr);
    arr.pop();
    arr.push(`-${nums[i]}`);
    dfs(i+1, arr);
    arr.pop();
  }
  // faster way
  const dfsSum = (i, sum) => {
    if(i>=len){
      if(sum===target)
        count++;
      return;
    }
    dfsSum(i+1, sum+nums[i]);
    dfsSum(i+1, sum-nums[i]);
  }
  dfsSum(0, 0);
  return count;
};


const nums = [1,1,1];
const target = 3;
const re = findTargetSumWays(nums, target);
console.log('mm', re);

