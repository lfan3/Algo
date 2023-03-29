const swap = require("./lib/swap");

const mergeSort = (array)=>{
    // left mid right 
    const sort = (array)=>{
        const len = array.length;
        if(len === 1)
            return array;
        // ！easy for mistake
        const mid = Math.floor(len/2);
        const left = array.slice(0, mid);
        const right = array.slice(mid, len);
        const leftSorted = sort(left);
        const rightSorted = sort(right)
        return merge(leftSorted, rightSorted);
    }
    const merge = (leftArr, rightArr)=>{
        const result = [];
        const ln = leftArr.length;
        const rn = rightArr.length;
        let i= j= k =0;
        while(i<ln && j<rn){
            if(leftArr[i] < rightArr[j]){
                result[k] = leftArr[i];
                i++;
            }else if(leftArr[i] > rightArr[j]){
                result[k] = rightArr[j];
                j++;
            }
            k++;
        }
        while(i>=ln && j<rn){
            result[k] = rightArr[j];
            k++;
            j++;
        }
        while(i<ln && j>=rn){
            result[k] = leftArr[i];
            i++;
            k++;
        }
        return result;
    }
    return sort(array);
}



// la and ra are already sorted array
function merge(la, ra){
  let i = 0;
  let j = 0;
  const sortedArr = [];
  while(i<la.length && j<ra.length){
    if(la[i] < ra[j]){
      sortedArr.push(la[i]);
      i++;
    }else{
      sortedArr.push(ra[j]);
      j++;
    }
  }
  while(i<la.length){
    sortedArr.push(la[i]);
    i++;
  }
  while(j<ra.length){
    sortedArr.push(ra[j]);
    j++;
  }
  
  return sortedArr;
}

// const m = mergeSort([1,2,5,6,4,8]);
// const n = 
// const k = divide([6,5,12,10,9,1])
// // console.log(merge([10,12],[2,6, 8]));
// console.log(k);
const arr = [6,5,12,10,9,1]
// -----------------------22/10/19----------------------
// merge sort 首先是把所有的array拆分成一半 一直到只剩下一个item在array中。之后在把他们合并
// 首先 我们先想怎么把array分成一半 直到一个
// 然后我们在想怎么把两个已经sorted array 给合并
function divide_array(array){
  const len = array.length;
  if(len=== 1){
    console.log(array)
    return array;
  }
  const mid = Math.floor(len/2);
  const leftArr = array.slice(0, mid);
  const rightArr = array.slice(mid, len);
  const leftSorted = divide_array(leftArr);
  const rightSorted = divide_array(rightArr);
  return merge(leftSorted, rightSorted);
}

// 两个sorted array，这两个可能是递增根据第一个array的增减序来排序, 默认array里面的数字在两个以上
function mergeWithDifferentSign(arr1, arr2){
  const sortedArr = [];
  let i = 0;
  let j = 0;
  const order1 = arr1[1] - arr1[0] > 0;
  const order2 = arr2[1] - arr2[0] > 0;
  if(order2 !== order1){
    arr2.sort((a,b)=> {
      if(order1){
        return a-b;
      }else{
        return b-a;
      }
    });
  }
  while(i<arr1.length && j <arr2.length){
    if(order1){
      if(arr2[j]- arr1[i] > 0){
        sortedArr.push(arr1[i]);
        i++;
      }else{
        sortedArr.push(arr2[j]);
        j++;
      }
    }else{
      if(arr2[j]- arr1[i] < 0){
        sortedArr.push(arr1[i]);
        i++;
      }else{
        sortedArr.push(arr2[j]);
        j++;
      }
    }

  }
  while(i<arr1.length){
    sortedArr.push(arr1[i]);
    i++;
  }
  while(j<arr2.length){
    sortedArr.push(arr2[j]);
    j++;
  }
  return sortedArr;
}

// divide_array(arr);
// const m = [1,5,6,9,16];
// const n = [2,4,8,12,18];
// const l = [25,21,7];
// const r = merge(l,m);
const a= [1,23,34,56,2,6];
const m = divide_array(a);
console.log('m', m);






 








