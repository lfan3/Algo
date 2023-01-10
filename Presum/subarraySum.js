var subarraySum = function(nums, k) {
  let count = 0;
  for (let start = 0; start < nums.length; ++start) {
      let sum = 0;
      console.log("start=>",start,"sum=>",sum);
      for (let end = start; end >= 0; --end) {
          sum += nums[end];
          console.log("end=>",end, "sum=>",sum);
          
          if (sum == k) {
              count++;
          }
      }
  }
  return count;
};

const a = [1,1,1,2,2];
const b = [3,4,7,2,-3,1,4,2];

// reduce the problem into subproblem: 
  // from the 0 position, all subarray begin from [3..] which sum is equal to target number
  // the proble is from all the position
function subArraySubProbem(arr, target){
  const size = arr.length;
  let count = 0;
  let sum = 0;
  
  for(let i=0; i< size; i++){
    sum += arr[j];
    if(sum === target)
      count++
  }
  return count;
}
// O(n^2) time complexity: fix the start element
function subarraySumStart(arr, target){
  const size = arr.length;
  let count = 0;
  for(let i=0; i< size; i++){
    let sum = 0;
    for(let j=i; j<size; j++){
      sum += arr[j];
      if(sum === target)
        count++
    }
  }
  return count;
}
// O(n^2) time complexity: fix the ending element
function subarraySumEnd(arr, target){
  const size = arr.length;
  let count = 0;
  for(let i=0; i< size; i++){
    let sum = 0;
    for(let j=i; j>=0; --j){
      sum += arr[j];
      if(sum === target)
        count++
    }
  }
  return count;
}

// O(n^2) time complexity:prefix sum
function subarraySumOn(arr, target){
  const preSum = [];
  const size = arr.length;
  let sum = 0;
  let count = 0;
  for(let i=0; i< size; i++){
    sum += arr[i];
    // preSum.push(sum);//wrong： should not be put here arr = [1] targe = 0 
    if(sum === target) count++;
    // wrong: sum - target 可能在presum里面存在好几个 比如【0，0,0】target=0；
    // wrong:而且不应该用else if
    // else if(preSum.includes(sum - target)){ 
    // rest may existed in several places
    const rest = sum - target;
    // this place can be optimized with a Map
    const c = preSum.filter(s => s === rest).length;
    count += c;
    preSum.push(sum);
  }
  return count;
}
// O(n) time complexity with Map + presum
function subarraySumOn(arr, target){
  const preSumMap = new Map();
  const size = arr.length;
  let sum = 0;
  let count = 0;
  for(let i=0; i< size; i++){
    sum += arr[i];
    // preSum.push(sum);//wrong： should not be put here arr = [1] targe = 0 
    if(sum === target) count++;
    // wrong: sum - target 可能在presum里面存在好几个 比如【0，0,0】target=0；
    // wrong:而且不应该用else if
    // else if(preSum.includes(sum - target)){ 
    // rest may existed in several places
    const rest = sum - target;
    if(preSumMap.get(rest)){
      count += preSumMap.get(rest);
    }
    const sumNumber = preSumMap.get(sum) || 0;
    preSumMap.set(sum, sumNumber+1);
  }
  return count;
}

const l = subarraySumStart(b,7);
const m = subarraySumEnd(b,7);
const n = subarraySumOn(b,7);
console.log(l,m, n)
// subarraySum(a, 6)
// console.log(subarraySum(a, 6));
