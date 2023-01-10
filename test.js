const a = [1,2,3];
const b = [1,2,3];
const c = [a];
const m = c.some(item => item.toString === a.toString);
console.log(m)
