
// 
var rotate = function(nums, k) {
  for(let i=0; i<k; i++){
    const m = nums.pop();
    nums.unshift(m);
  }
};

var rotate = function(nums, k) {
  const len = nums.length
  while(k>len){
    k = k % len;
  }
  const m = nums.splice(-k);
  nums.unshift(...m);
};