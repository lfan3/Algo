function loop1(arr){
  const res = [];
  for(let i=0; i<arr.length; i++){
    res.push(arr[i])
  }
}

function loop2(arr){
  const res = [];
  const len = arr.length
  for(let i=0; i<len; i++){
    res.push(arr[i])
  }
}

function geneArr(num){
  const re = [];
  for(let i=0; i<num; i++){
    re.push(i)
  }
  return re;
}

const arr = geneArr(1000);
// console.time("loop1")
// loop1(arr);
// console.timeEnd("loop1")

console.time("loop2")
loop2(arr);
console.timeEnd("loop2")