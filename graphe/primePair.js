// bipart 匹配问题。hungarian algo
const {isPrimeNaive} = require("../math/isPrime")

const odds = [3,5,7,9];
const evens= [2,6, 8, 10];

var primePaire = (odds, evens)=>{
  const ol = odds.length;
  const el = evens.length;
  // event's index as index, odds index as value. trace the evens's odds paire. 比如 2 在evens下标是 0， match【0】= 1， 1 是 5 在 odds里面的下标。说明 5 和 2 配对
  const match = Array(el).fill(-1);
  let count = 0;
  
  
  var findPath = (i, match, visited)=>{
    for(let j = 0; j< el; j++){
      if(isPrimeNaive(odds[i] + evens[j]) && !visited[j]){
        visited[j] = 1;
        if(match[j]===-1 || findPath(match[j], match, visited)){
          match[j] = i;
          return true;
        }
      }
    }
    return false;
  }
  
  for(let i=0; i<ol; i++){
    // trace the visited evens
    const visited = Array(el).fill(0);
    if(findPath(i, match, visited)){
      count++;
    }
  }
  return count;
}

console.log(primePaire(odds, evens))






 
