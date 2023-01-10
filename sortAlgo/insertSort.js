
function insertSort(arr){
  let key;
  for(let i=0;i<arr.length; i++){
    key = arr[i];
    let j = i-1;
    // this way will increase the time complexity, in insertSort2, in the best case we do not enter inside the loop
    while(j>=0){
      if(arr[j] > key){
        arr[j+1] = arr[j];
      }else{
        // if no break, it will continue
        break;
      }
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}
/**
 * ascending order
 * like sort the pocker
 * assumed the first element is sorted
 * for each unsorted element, stored the value in temp variable key
 * compare the key to the last sorted elements and find the one smaller than key
 * if the sorted element x is greater than k, move x to the right
 * if the sorted element is smaller than k, put the k at its right
 * if no sorted element is smaller than k, put k at the begining of array
 */
function insertSort2(arr){
  let key;
  for(let i=0;i<arr.length; i++){
    key = arr[i];
    let j = i-1;
    // here is much simple form of code
    while(j>=0 && arr[j] > key){
      // move the arr[j] to the right to create space for key
      arr[j+1] = arr[j];
      j--;
    }
    arr[j+1] = key;
  }
  return arr;
}

const a = [8,3,5,0,1,2,7];
let b = insertSort2(a);
console.log(b);
