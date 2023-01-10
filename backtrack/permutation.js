const num = [1,2,3,5,6,7,8,9,10,11,12];

const permute3 = (nums) =>{
  const result = [];
  const permute = [];
  
  const permutation = (permute)=>{
    if(permute.length === 3){
      result.push(permute.map(v=>v));
      return;
    }
    for(let i=0; i<nums.length; i++){
      if(!permute.includes(nums[i])){
        permute.push(nums[i]);
        permutation(permute);
        permute.pop();
      }
    }
  }
  permutation(permute);
  return result;
}

const m = permute3(num);
console.log('m',m);

const permutation = (nums) => {
    const res = [];
    const permutation = [];
    const used = [];
    const backtrack = (res, nums, permutation, used) =>{
        if(permutation.length === nums.length){
            const str = permutation.join("");
            res.push(str);
            return;
        }
        for(let i=0; i<nums.length; i++) {
            if(!used[i]){
                used[i] = true;
                permutation.push(nums[i]);
                backtrack(res, nums, permutation, used);
                used[i] = false;
                permutation.pop();
            }
        }
    }
    backtrack(res, nums, permutation, used);
    return res;
}

//---------2022/10/20----------
function permutationUnique(arr){
  const len = arr.length;
  const result = [];
  const existed = new Map();
  const used = new Array(len).fill(false);
  const permutation = [];
  
  const backtrack = (arr)=>{
    if(permutation.length === 3){
      const key = permutation.toString();
      if(!existed.get(key)){
        existed.set(key, true);
        result.push(permutation.map(item=>item));
      }
      return;
    }
    for(let i=0; i<arr.length; i++){
      if(!used[i]){
        used[i] = true;
        permutation.push(arr[i]);
        backtrack(arr, permutation, used);
        permutation.pop();
        used[i] = false;
      }
    }
  }
  backtrack(arr);
  return result;
}

// const r = permutationUnique([1,1,3]);
// 输入：nums = [1,1,2]
// 输出：
// [[1,1,2],
//  [1,2,1],
//  [2,1,1]]
