function fn() {
  return (i)=>i;
}

const f1 = fn();
const f2 = fn();

console.log(f1 === f2);