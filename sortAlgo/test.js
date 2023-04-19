const people = [ [ 7, 0 ], [ 7, 1 ], [ 6, 1 ], [ 5, 0 ], [ 5, 2 ], [ 4, 4 ] ];
const p = people.splice(2, 1);
console.log("aaa", people)
console.log("aaab", p)
people.splice(0,0,p[0])
console.log("aaa2", people)


// console.log(pos, i, p, people)