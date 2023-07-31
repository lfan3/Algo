const a = [1,2]
const c = [4,5]
const b = []
b.push(...a, ...c)
console.log("b",b)

const m  =[[3,4],[1,2]]
const k = m.findIndex((a)=>a[0]===1 && a[1]===2)
console.log("k",k)