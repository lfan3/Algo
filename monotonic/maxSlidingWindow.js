// 知识点：monotonical decreasing queue
// 如果右边的的数字更大，那么所有在左边的数字可以去掉。最后形成一个decreasing queue
// 注意点： i和j的位置
var maxSlidingWindow = (arr, k)=>{
  let descreasingQueue = [];
  const result = [];
  let i = 0;
  let j = k-1;

  // 先把滑动窗口第一次放上去
  for(let j=0; j<arr.length && j<k; j++){
    while(descreasingQueue.length && descreasingQueue[descreasingQueue.length-1] < arr[j]){
      descreasingQueue.pop();
    }
    // 这个下面 需要把所有的数值都循环一遍。时间慢
    // descreasingQueue = descreasingQueue.filter((num)=>num>=arr[j]);
    // 下面错误
    // if(descreasingQueue.length && descreasingQueue[0] < arr[j]){
      // descreasingQueue = [];
    // }
    descreasingQueue.push(arr[j]);
  }
  result.push(descreasingQueue[0]);
  // 每次移动一步。
  // i 和 j 分别对应窗口的第一个数和最后一个数的下标
  // 摆放好之后，每次都是先向右边移动一个格子。
  while(j<arr.length){
    // 向右移动一位，update descreasing queue
    if(descreasingQueue[0] === arr[i]){
      descreasingQueue.shift();
    }
    i++;
    j++;
    if(j<arr.length){
      while(descreasingQueue.length && descreasingQueue[descreasingQueue.length-1] < arr[j]){
        descreasingQueue.pop();
      }
      descreasingQueue.push(arr[j]);
      result.push(descreasingQueue[0]);
    }
  }
  return result
}
// timeout
function main(){
  const nums = [1,3,1,2,0,5]
  const nums2 = [-7,-8,7,5,7,1,6,0];
  const k = 4;
  maxSlidingWindow(nums2, k);
}

main()


