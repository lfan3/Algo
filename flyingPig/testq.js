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
        result.push(arr1[i]);
        j++;
        }else{
        result.push(array2[j]);
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
  
  }
  const r = Array.from(new Set(result));
  return r;
}

const arr1 = [1,3,5,5];
const arr2 = [6,5,4];
const r2 = merge(arr1, arr2)  // => [1,2,3,4,5,6]

// const arr1 = [4,3,2];
// const arr2 = [3,2,1];
// merge(arr1, arr2)  // => [4,3,2,1]
const m = [11,22,11];
console.log(r2);

function compareVersion(version1, version2) {
  /* your code goes here */


  const v1 = version1.split(".").map(i=>Number(i));
    const v2 = version2.split(".").map(i=>Number(i));
    let i = 0;
    let j = 0;
    while(i<v1.length && j<v2.length){
      if(v2[j] > v1[i]){
        return -1;
      }else if(v2[j] < v1[i]){
        return 1;
      }
      i++;
      j++;
    }
    if(i<v1.length && v1[i]!== 0){
      return 1;
    }
    if(j<v2.length && v2[i]!== 0){
      return -1
    }
    
  return 0;
}

// console.log(compareVersion("0.20.7", "0.20.8") === -1);  // -1
// console.log(compareVersion("0.20.9", "0.20.8") === 1);  // 1
// console.log(compareVersion("0.20.08", "0.20.8") === 0);  // 0
// console.log(compareVersion("0.20.08", "0.20.8") === 0);  // 0
// console.log(compareVersion("0.20.08", "0.20.8.1") === -1); // -1
// console.log(compareVersion("0.20.8.0", "0.20.8") === 0);  // 0
// console.log(compareVersion("0.20.8.1", "0.20.8") === 1);  // 1
// console.log(compareVersion("0.020", "0.20") === 0); 