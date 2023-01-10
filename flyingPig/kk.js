function merge(arr1, arr2) {
  let i=0;
  let j=0;
  //sign >0 递增
  let sign = arr1[1] - arr1[0] > 0;
  let sign2 = arr2[1] - arr2[0] > 0;
  let result = [];
  let array2 = arr2;
  if(sign !== sign2){
    array2 = arr2.reverse();
  }
  while(i<arr1.length && j<array2.length){
      if(sign){
        if(array2[j]>arr1[i]){
        result.push(arr1[i]);
        i++;
        }else{
        result.push(array2[j]);
        j++;
        }
      }else{
        if(array2[j]>arr1[i]){
          result.push(array2[j]);
          j++;
          }else{
          result.push(arr1[i]);
          i++;
          }
      }
  }

  while(i<arr1.length){
    result.push(arr1[i]);
    i++;
  }
  while(j<arr2.length){
      result.push(array2[j]);
      j++;
  };
  
  const r = Array.from(new Set(result));
  return r;
}

// const arr1 = [1,3,5];
// const arr2 = [6,5,4,2];
// const r = merge(arr1, arr2)  // => [1,2,3,4,5,6]
// console.log("r",r);

const arr1 = [4,3,2];
const arr2 = [1,2,3];
const m = merge(arr1, arr2)  // => [4,3,2,1]
console.log(m);