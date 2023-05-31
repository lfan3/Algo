// leetcode 253

/**
 * @param {number[][]} intervals
 * @return {number}
 * 从要定会议的人的角度来看。
 * 先把会议室按照时间排序，这样 会议开始的时间就是升序的
 * 然后需要会议室的人 会看每个房间最后一个人结束的时间是否和自己的冲突
 */
var minMeetingRooms = function(intervals) {
  intervals.sort((a,b)=>a[0] - b[0]);
  const len = intervals.length;
  const rooms = [[intervals[0]]];
  let inserted = false;
  
  for(let j=1; j<len;j++ ){
    let i = 0;
    inserted = false;
    while(i<rooms.length){
      
      if(intervals[j][0] >= rooms[i][rooms[i].length-1][1]){
        rooms[i].push(intervals[j]);
        inserted = true
        break;
      }else{
        i++;
      }
    }
    if(!inserted){
      rooms[i] = [intervals[j]]
    }
  
  }
  return rooms.length
};

// 使用heap方法
// 按照开始时间排序
// 初始化最小堆，minheap
// 检查堆顶部的房间是否空闲。

const intervals = [[0,30],[5,10],[15,20]];
const intervals2 = [[7,10],[2,4]];
const r = minMeetingRooms(intervals);
console.log(r)