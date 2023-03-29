const swap = require("./lib/swap");
// time O(n^2) space O(1)
// increase order
function bubbleSort(arr){
  for(let i=0;i<arr.length-1; i++){
    console.log('std', i)
    
    for(let j=0; j<arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j,j+1);
      }
    }
  }
  return arr;
}
// optimize to reduce the inutil loop interation
function bubbleSortOp(arr){
  for(let i=0;i<arr.length-1; i++){
    console.log('op', i)
    let swapped = false;
    for(let j=0; j<arr.length-1; j++){
      if(arr[j] > arr[j+1]){
        swap(arr, j,j+1);
        swapped = true;
      }
    }
    if(!swapped) break;
  }
  return arr;
}

const a = [8,0,3,5,7];
const c = [8,0,3,5,7];
const b = bubbleSort(a);
const b1 = bubbleSortOp(c);
// console.log('b',b);