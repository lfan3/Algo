 /**
 * @param {number[]} nums
 * @return {number[]}
 */
var exchange = function(nums) {
  let len = nums.length;
  let m = 0;
  let n = len-1;
  
  const swap = (i, j)=>{
    let tmp = nums[i];
    nums[i] = nums[j];
    nums[j] = tmp;
  }
  // [0, m]奇数
  // [n len-1]偶数
  // 一次循环，m<=n
  // 如果是奇数 m++
  // 如果是偶数， 从偶数指针里面看，如果偶数指针指的数字是奇数和 奇数指针m交换。
  //                           如果偶数指针指的也是偶数，继续找下一个奇数
  // 条件 循环到底是什么？？
  
  while(m < n){
    if(nums[m]%2){
      m++;
    }else{
      if(nums[n]%2){
        swap(m, n);
        n--;
        m++;
      }
      while(!(nums[n]%2)){
        n--;
      }
    }
  }
};

const k = [1,2,3,4,6,8,3,7,9,6,7,14,15]
// wrong
const m =[2,4,6]
exchange(k);
console.log(k)