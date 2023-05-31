var merge = function(intervals) {
  intervals.sort((a,b)=>a[0] - b[0]);
    let i = 0;
    // 如果按照升序排列那么有三种情况。【10,20】【30,40】|【10,20】【15,19】| 【10,20】【15,29】
    while(i<intervals.length-1){
      const curr = intervals[i];
      const next = intervals[i+1];
      if(next[0] >= curr[0] && next[0] <= curr[1] && next[1] >= curr[1]){
        curr[1] = next[1];
        // 消耗时间
        intervals.splice(i+1, 1);
      }else if(next[0] >= curr[0] && next[1] <= curr[1] ){
        intervals.splice(i+1, 1);
      }else{
        i++;
      }
    }
    return intervals;
};

function merge2( intervals ) {
  // write code here
  const len = intervals.length;
  // ! limit case
  if(len === 0){
    return [];
  }
  intervals.sort((a,b)=>a[0] - b[0]);
  const result = [intervals[0]];
  let i = 1;
  // 如果按照升序排列那么有三种情况。【10,20】【30,40】|【10,20】【15,19】| 【10,20】【15,29】
  while (i < len) {
    const prev = result.pop();
    const curr = intervals[i];

    if(curr[0] > prev[1]){
      //! wrong point
        result.push(prev);
        result.push(curr);
    }else if(curr[1]<= prev[1]){
        result.push(prev);
    }else{
        curr[0] = prev[0];
        result.push(curr);
    }
    i++;
  }
  return result;
}

var mergeQuick = function(intervals) {
  intervals.sort((i,j)=>i[0] - j[0]);
  const merged = [];

  const mergeArray=(arr1, arr2)=>{
      const array = [arr1[0]]
      arr1[1] > arr2[1] ? array.push(arr1[1]) : array.push(arr2[1]);
      return array;
  }
  let i = 1;
  // 难点：merged 和 interval 怎么loop
  merged.push(intervals[0])
  while(i<intervals.length){
      if(intervals[i][0] > merged[merged.length-1][1]){
          merged.push(intervals[i]);
      }else{
          const last = merged.pop();
          merged.push(mergeArray(last, intervals[i]))
      }
      i++;
  }
  return merged;
};


const int = [[10,30],[20,60],[25,30],[150,180]];

console.time();
const m = merge(int);
console.log(m);
console.timeEnd();

console.time();
const n = merge(int);
console.log(n);
console.timeEnd();
// leetcode 36， nc37