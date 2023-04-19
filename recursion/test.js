const a = [1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1]
const k = ["1","2"]
const m = a.map(k=>k.toString());
const n = Number(m.join(""))
const c = Number(k.join(""))
console.log("m",c, n)
