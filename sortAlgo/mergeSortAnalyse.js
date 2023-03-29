// merge sort problem can be divided into the following easier problem. each array contains at least two elements
// 1) merge the same order (increasing or dicreasing)two arrays
// 2) divided

// 1)increasing order
function merge(arr1, arr2){
  const len1 = arr1.length;
  const len2 = arr2.length;
  const arr = [];
  let i=0, j=0;
  
  while(i<len1 && j<len2){
    if(arr1[i] - arr2[j] > 0){
      arr.push(arr2[j])
      j++;
    }else{
      arr.push(arr1[i]);
      i++;
    }
  }
  while(i<len1){
    arr.push(arr1[i]);
    i++;
  }
  while(j<len2){
    arr.push(arr2[j]);
    j++;
  }
  return arr;
}

// 2) divided
function divided(arr){
  if(arr.length === 1)
    return arr;
  const mid =Math.floor(arr.length/2);
  const left = arr.slice(0, mid);
  const right = arr.slice(mid, arr.length);
  divided(left);
  divided(right);
  console.log("left: ",left, "right:",right)
}
// const  m=  merge([7,9],[4,5]);
// const k = divided([1,2,3,4,5,6,7,8])

// 3) 优化space
function mergeOpt(arr){
  const temp = new Array(arr.length);
  
  divided = (l, r)=>{
    if(l < r){
      const mid = Math.floor((l+r)/2);
      divided(l, mid);
      divided(mid+1, r);
      merge(l, mid, r);
    }
  }
  merge=(l,m, r)=>{
    let leftStart = l;
    let rightStart= m+1;
    let i = l;
    
    while(leftStart <=m && rightStart <=r){
      if(arr[leftStart] < arr[rightStart]){
        temp[i] = arr[leftStart];
        leftStart++;
        i++;
      }else{
        temp[i] = arr[rightStart];
        rightStart++;
        i++;
      }
    }
    while(leftStart<=m){
      temp[i] = arr[leftStart];
      leftStart++;
      i++;
    }
    while(rightStart<=r){
      temp[i] = arr[rightStart];
      rightStart++;
      i++;
    }
    
    // copy from temp back to array, why should i do this??? not return the temp directly, if not the array[i] will not change.
    // two way sort is to sorted two already sorted array
    for(let j=l; j<=r; j++){
      arr[j] = temp[j];
    }
  }
  
  divided(0, arr.length-1);
  // why i can not just return temp??
  return arr;
}

const m = [7,8,3,5,2];
const k = mergeR(m);
console.log('k',k)



