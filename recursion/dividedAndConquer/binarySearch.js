function binarySearch(arr, target){
  const bsR = (arr, target, left, right)=>{
    if(left > right || !arr.length){
      return -1;
    }
    const midIndex = Math.floor((left+right)/2);
    if(arr[midIndex] === target){
      return midIndex;
    }
    if(arr[midIndex] > target){
      return bsR(arr, target, left, midIndex);
    }
    return bsR(arr, target, midIndex, right);
  }
  return bsR(arr, target, 0, arr.length-1);
}

const arr = [1,2,3,4,5,6,7,8,9,10];
const m = binarySearch(arr, 9);