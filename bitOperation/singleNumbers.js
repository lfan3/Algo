// 所有的数字都出现两次，除了一位数字出现一次。
// easy level，
/* 规律：
  所有数字和自己异或XOR是零 ==> 如果两个数字异或之后不是零，那么两个数字不同。
  所有数字和零异或是自己。
*/
var singleNumber = function(nums) {
  let ret = 0;
   for(let n of nums){
    ret ^= n;
   }
   return ret
};

// middle level
// 所有的数字都出现两次，但是有两位数字只出现一次。 找出两位数字
// 分组法。如果两个不相同的数字是a和b，ret = a ^ b. 那么所有的数字的异或其实就是 ret。也就是说ret里面如果某个bit是1，那个是1的位置说明了a和b在那个位置上不同。
// 
var singleNumbers = function(nums) {
  let ret = 0;
  let a = 0;
  let b = 0;
  // 先找到所有数字的异或，也就是找到两个不同的数字的异或 ret
  for(let n of nums){
    ret ^= n;
    console.log(ret)
  }
  let h = 1;
  // 找到ret里面某一位是1 的bit。说明这一位 两个不同的数字 对应的bit是不同的。根据这个不同的bit就可以将他们分成两组。
  // !!!==的优先级大于&。必须有括号
  while((h & ret) === 0){
    h <<= 1;
  }
  console.log(h,ret)
  // 分组。让不同的数字在不同的组。相同的数字在相同的组。
  for(let n of nums){
    if(h & n){
      a ^= n;
    }else{
      b ^= n;
    }
  }
  return [a,b]
};

// !!!==的优先级大于&。必须有括号，例子
// 异或运算：x ^ 0 = x​ ， x ^ 1 = ~x
// 与运算：x & 0 = 0 ， x & 1 = x
// 或运算 x | 0 = x
// console.log(1 & 4)
// console.log(1 & 4 === 0)
// console.log((1 & 4) === 0)


// 有点难
var singleNumbers2 = function(nums) {
  let count = Array(32).fill(0);
 
  for(let n of nums){
    for(let j=0; j<32; j++){
      count[j] += (1 & n);
      //rappel: diff between >> and >>>
      n >>>=1;
    }
  }
  
  let res = 0;
  let m = 3;
  
  for(let i=0; i<32; i++){
    // 这个必须先移位
    res <<= 1
    res |= count[31-i] % m;
  }
  return res
}
// 000123
console.log(singleNumbers2([1, 1, 1, 4]))

// 基础一个数字的二进制 有多少个1
function countOne(n){
  let count = 0;
  while(n){
    count += n & 1;
    // unsigne right 
    n >>>=1;
  }
  console.log("cc", count)
  return count;
}

function getBit(n){
  let arr = [];
  while(n){
    arr.unshift(n & 1);
    // unsigne right 
    n >>>=1;
  }
  return arr;
}

countOne(15)
getBit(2)