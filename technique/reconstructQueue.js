/**
 * @param {number[][]} people
 * @return {number[][]}
 */

class Node {
  constructor(val, next){
    this.val = val;
    this.next = next;
  }
}

// const posMap= {0:[[5,0],[7,0]], 1:[[6,1],[7,1]], 2:[[5,2]], 4:[4,4]}
// 从高到低排,如果相同高度，排位置
// 在按照距离插入矮的人
var reconstructQueue = function(people) {
  // 排序
  people.sort((a, b)=>{
    if(a[0] != b[0]){
      return b[0] - a[0]
    }else{
      return a[1] - b[1]
    }
  });
  // 插入
  // [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ]
  for(let i=0; i<people.length; i++){
    const pos = people[i][1];
    const p = people.splice(i, 1);
    people.splice(pos, 0, p[0]);
  }
  return people;
};

const people = [[4,4],[7,1],[7,0],[5,2],[5,0],[6,1]]
const r = reconstructQueue(people);
console.log('r', r)
// people.shift();
// console.log(people)
