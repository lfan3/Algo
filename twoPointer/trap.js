
var trap = function(height) {
  const n = height.length;
  // leftMaxArr[i] 包含i，它的左边最高值
  const leftMaxArr = Array(n);
  const rightMaxArr = Array(n);
  const diff = Array(n);
  
  leftMaxArr[0] = 0;
  rightMaxArr[n-1] = height[n-1];
  
  for(let i=1; i<n; i++){
    leftMaxArr[i] = Math.max(leftMaxArr[i-1], height[i]);
  }
  for(let i=n-1; i>0; i--){
    rightMaxArr[i-1] = Math.max(rightMaxArr[i], height[i-1]);
  }
  console.log('le', leftMaxArr)
  console.log('re', rightMaxArr)
  
  
  for(let i=0; i<n; i++){
    diff[i] = Math.min(rightMaxArr[i], leftMaxArr[i]) - height[i];
  }
  
  const sum = diff.reduce((acc, curr)=>{
    return curr + acc;
  },0)
  return sum;
};

// 难点pointer的位置，什么时候变
// 静态的状态 leftMax rightMax 和动态的pointer之间的联系。什么时候做判断。pointer到达i的时候 应该 做出新的max的判断。
// 双指针要分清楚 动态与静态
var trappingWithTwoPointer = (height)=>{
  const n = height.length;
  let leftMax = height[0];
  let rightMax = height[n-1];
  let volum = 0;
  let left = 0;
  let right = n-1;
  let minHeight = 0;
  while(left<=right){
    if(leftMax<=rightMax){
      minHeight = leftMax - height[left];
      volum += (minHeight < 0 ? 0 :minHeight);
      console.log("l",left, leftMax, volum)
    }else{
      minHeight = rightMax - height[right];
      volum += (minHeight < 0 ? 0 : minHeight);
      console.log("r",right, rightMax, volum)
      
    }
    // 难点： pointer 和leftmax 与rightmax应该是同步的。
    if(height[left] <= height[right]){
      left++;
      leftMax = Math.max(leftMax, height[left]);
    }else{
      right--;
      rightMax = Math.max(rightMax, height[right]);
    }
  }
  return volum;
}



function main(){
  const height = [0,1,0,2,1,0,1,3,2,1,2,1];
  
  // const s = trap(height);
  const ss = trappingWithTwoPointer(height);
  console.log('su', ss)
}

main();