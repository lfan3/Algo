/**
 * description
 * minMutation
 * 如果结果的mutation 不在bank中，那么直接输出-1
 * 将bank里面的基因转换根据转换关系构建成adjacentList的无向图。
 * vis 如果已经visited就不需要在visite了
 * 记录bank中和最终状态基因组一样的finalkey
 * 找到start和bank中只差1个字符的字符串放到queue中。
 * 这个问题转变成了从start开始到finalKey的最短距离的问题。最短距离可以优先考虑bfs
 */

var minMutation = function(startGene, endGene, bank) {
  const finalIndex = bank.indexOf(endGene);
  const len =  startGene.length;
  const bankSize = bank.length;
  const queue = [];
  const adj = Array(bankSize).fill().map(()=>[])
  const vis = []; //凡是进入到queue的都在visit中
  
  if(finalIndex === -1) return -1;
  // @str1 has the same len of str2
  // O(n)
  const diffOne = (str1, str2)=>{
    let count = 0;
    let i = 0;
    while(i < len){
      if(str1[i] !== str2[i]){
        count++;
      }
      i++;
    }
    return count === 1
  }
  let step = 1;
  
  // O(n^2) interate to get the inner diffOne in the bank
  for(let i=0; i<bankSize; i++){
    // init queue
    if(diffOne(bank[i], startGene)){
      if(i === finalIndex){
        return step
      }
      queue.push(i)
      // easy to forget
      vis.push(i)
    }
    for(let j = i+1; j<bankSize;j++){
      if(diffOne(bank[i], bank[j])){
        adj[i].push(j)
        adj[j].push(i)
      }
    }
  }
  // bfs shortest path problem
  while(queue.length){
  //  here is queue's size
    size = queue.length;
    
    for(let i=0; i<size; i++){
      const deque = queue.shift();
      if(deque === finalIndex){
        return step;
      }
      for(let n of adj[deque]){
        if(vis.indexOf(n) === -1){
          vis.push(n);
          queue.push(n)
        }
      }
    }
    step++;
  }  
  
  return -1
};

const start = "AAAAACCC";
const end = "AACCCCCC";
const bank = ["AAAACCCC","AAACCCCC","AACCCCCC"];

const start1 = "AACCGGTT"
const end1 = "AAACGGTA"
const bank1 = ["AACCGGTA","AACCGCTA","AAACGGTA"]

const start2 = "AACCGGTT"
const end2 = "AAACGGTA"
const bank2 = ["AACCGATT","AACCGATA","AAACGATA","AAACGGTA"]

const start3 = "AAAAAAAA"
const end3 = "CCCCCCCC"
const bank3 = ["AAAAAAAA","AAAAAAAC","AAAAAACC","AAAAACCC","AAAACCCC","AACACCCC","ACCACCCC","ACCCCCCC","CCCCCCCA","CCCCCCCC"]


const m = minMutation(start,end,bank)
const m2 = minMutation(start3,end3,bank3)
console.log("m",m2,m)