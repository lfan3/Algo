var meetingRooms = (timeArr)=>{
  const arr = []; //[(5,+1),(10,-1)...]
  let curr = 0;
  let max = 0;
  
  for(let [a,b] of timeArr){
    arr.push([a, 1])
    arr.push([b, -1])
  }
  arr.sort((a,b)=>a[0] - b[0]);
  
  for(let [time, op] of arr){
    curr += op;
    max = Math.max(curr, max);
  }
  return max
}

const timeArr = [[5,10],[15,20],[0,30],[9,12]];
const k =meetingRooms(timeArr);
console.log(k)