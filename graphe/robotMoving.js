/**
 * @param {number} m
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var movingCount = function(m, n, k) {
  const dr = [-1,1,0,0];
  const dc = [0,0,-1,1];
  const isFeasible = (r,c)=>{
    return calculeSum(r) + calculeSum(c) <= k;
  }
  const calculeSum = (number)=>{
    let num = number;
    let total = 0;
    while(num){
      const rest = num % 10;
      num = Math.floor(num/10);
      total += rest;
    }
    console.log(number, total, "aa")
    return total;
  }
  const bfs = ()=>{
    const rq = [0];
    const cq = [0];
    let count = 1;
    const visited = Array(m).fill().map(()=>Array(n).fill(0));
    visited[0][0] = 1;
    while(rq.length){
      const r = rq.shift();
      const c = cq.shift();
      // move
      for(let i=0; i<4; i++){
        const rr = r + dr[i];
        const cc = c + dc[i];
        console.log('rr cc', rr,cc)
        if(rr<0 || cc<0) continue;
        if(rr>=m || cc>=n) continue;
        if(visited[rr][cc]) continue;
        if(!isFeasible(rr, cc)) continue;
        
        rq.push(rr);
        cq.push(cc);
        visited[rr][cc] = 1;
        count++;
      }
    }
    return count;
  }
  return bfs()
};

const c = movingCount(3,1,0);
console.log(c)