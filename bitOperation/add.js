// basic
const a = 1;
const b = 2;
const c = 3;
const d = -1;
const e = -2;
console.log((a+b).toString(2))
console.log((a+c).toString(2))
console.log((c+b).toString(2))
console.log(d.toString(2))
console.log(e.toString(2))

// this method, no technique, need to remember
// 进位的是carry = (a & b)<<1
// 不进位的是 a ^ b
var add = function(a, b) {
  while(b != 0){
    const carry = (a & b) << 1;
    a = a ^ b;
    b = carry;
  }
  return a;
};