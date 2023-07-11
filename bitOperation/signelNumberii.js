// 在一个数组 nums 中除一个数字只出现一次之外，其他数字都出现了三次。请找出那个只出现一次的数字。
var singleNumber = function(nums) {
  const arr = Array(32).fill(0);
  let tmp;
  for(let n of nums){
    let tmp = 1;
    for(let i=0; i<32; i++){
      if(tmp & n){
        arr[i]++;
      }
      tmp <<= 1;
    }
  }
  for(let i=0; i<32; i++){
    arr[i] = arr[i] % 3;
  } 
  for(let i=0; i<bits.length; i++){
    tmp = tmp+bits[i] * Math.pow(2, i)
  } 
  return tmp;
};

// from a array of 0/1 get the number
// bits = [1,0,0] = 1 反过来的bits，左边是LSB least significant bit
const bitArryToNumber = (bits)=>{
  let tmp = 0;

  for(let i=0; i<bits.length; i++){
    tmp = tmp+bits[i] * Math.pow(2, i)
  }
  return tmp;
}

const bitArryToNumber2 = (bits)=>{
  let tmp = 0;
  const len = bits.length;
  for(let i=0; i<bits.length; i++){
    tmp <<= 1;
    tmp = tmp | bits[len-i-1]
  }
  return tmp;
}

console.log("ab",bitArryToNumber2([0,1]))