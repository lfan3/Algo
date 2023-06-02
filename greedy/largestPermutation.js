var largestPermutation = (arr, k)=>{
  const ori = arr.map(v=>v);
  arr.sort((a,b)=>b-a);
  let i = 0;
  while(k>0 && i<arr.length){
    const largest = arr[i];
    // can be optimised by a hashmap i guess
    const indexOri = ori.indexOf(largest);
    const indexArr = arr.indexOf(largest);
    // ! [4,2,3], 4 is already at the best place
    if(indexOri !== indexArr){
      // swap array in one line
      [ori[indexOri], ori[i]] = [ori[i],ori[indexOri]];
      k--;
    }
    i++;
  }
  return ori;
}

const m = largestPermutation([4,3,2], 2);
const m2 = largestPermutation([4,1,2], 2);
console.log(m, m2)
