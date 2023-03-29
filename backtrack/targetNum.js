
var findTargetSumWays = function(nums, target) {
  const res = [];
  const sz = nums.length;
  // const candidate = Array(2*sz);
  const candidate = Array(2*sz);
  // 数字所在的位置是2*n+1
  const backtrack = (pos, candidate)=>{
    if(pos >= 2 * sz){
    console.log(pos, candidate)
      
      const sum = candidate.reduce((acc, curr, index, arr)=>{
        if(curr === '+'){
          acc += +arr[index+1];
        }
        if(curr === '-'){
          acc -= +arr[index+1];
        }
        
        return acc;
      }, 0);
      if(sum === target){
        res.push(candidate.map(c=>c));
      }
      return;
    }
    // 符号的位置
    // 错误❌：if(!pos%2)
    if(!(pos%2)){
      candidate[pos] = '+';
    }else{
      candidate[pos] = nums[Math.floor(pos/2)];
    }
    
    backtrack(pos+1, candidate);
    if(!(pos%2)){
      candidate[pos] = '-';
    }else{
      candidate[pos] = nums[Math.floor(pos/2)];
    }
    backtrack(pos+1, candidate);
  }
  backtrack(0, candidate);
  return res;
};

const c = findTargetSumWays([2], 3)
// console.log(c)

  //         b(0,[])
  //     b(1,[+])
