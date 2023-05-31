function handleData(total, nums, arr){
  const m = Array.from(new Set(arr));
  const wordHash = {};
  const outerHash = {};
  const result = [];
  for(let j=0; j<m.length; j++){
    const number = m[j];
    const hash = {};
    outerHash[number] = hash
    const reg = new RegExp(number);
    for(let i=0; i<total; i++){
      let chiffre = nums[i];
      if(reg.test(chiffre)){
        wordHash[number] = 1;
        hash[i] = chiffre
      }
    }
  }
  for(let [key, obj] of Object.entries(outerHash)){
    const len = Object.keys(obj).length;
    if(len > 0){
      result.push(+key);
      result.push(len);
      for(let [nk, val] of Object.entries(obj)){
        result.push(+nk);
        result.push(val);
      }
    }
  }
  const totalLen = result.length;
  result.unshift(totalLen);
  return result;
}

const nums = [123, 456, 786, 453, 46, 7, 5, 3, 665, 453456, 745, 456, 786, 453, 123];
const arr = [6, 3, 6, 3, 0];

const r = handleData(15, nums, arr );
console.log("r", r)