const swap = require('./lib/swap');
// use the left one as pivot
const quickSort = (array)=>{
    const partition = (l, r)=>{
        const pivotIndex = l;
        const pivot = array[pivotIndex];
        while(r >= l) {
            if(array[l] > pivot && array[r] < pivot && r >=l)
                swap(array, l, r);
            while(array[l] <= pivot && r>=l){
                l++;
            }
            while(array[r] > pivot && r>= l){
                r--;
            }
        }
        swap(array, pivotIndex, r);
        return r;
    }
    const sort = (l, h)=>{
        if(l < h){
            const p = partition(l, h);
            sort(p+1, h);
            sort(0,p-1);
        }
    }
    sort(0, array.length - 1);
}
const arr = [7,8,3,9,5,10, 11,2,1];
quickSort(arr);

// use last element as Pivot
function quickSort2(arr){
  const partition = (l, r)=>{
    const pivot = arr[r];
    // !key import : ptr for tracking the greater element
    let ptr = l - 1;
    for(let i=l; i<r; i++){
      if(arr[i] < pivot){
        ptr++;
        swap(arr, i, ptr);
      }
    }
    swap(arr, ptr+1, r);
    return ptr+1;
  }
  const sort = (l, r)=>{
    if(l<r){
      const p = partition(l, r);
      sort(0, p-1);
      sort(p+1, r);
    }
  }
  sort(0, arr.length-1);
  return arr;
}

// left as pivot, same as quickSort2
// three pointers: one for interative--i, one for track the greater number with ptr, one to keep the pivot index --p
const quickSort3 = (arr)=>{
  const partition = (l, r)=>{
    const pivot = arr[l];
    let ptr = l;
    
    for(let i=l+1;i<=r; i++){
      if(arr[i] <= pivot){
    // console.log(ptr, l);
        ptr++;
        swap(arr, i, ptr);
      }
    }
    // console.log(ptr);
    swap(arr, l, ptr);
    return ptr;
  }
  const sort =(l, r)=>{
    if(l<r){
      const p = partition(l, r);
      sort(0, p-1);
      sort(p+1, r);
    }
    return arr;
  }
  return sort(0, arr.length-1);
}

// todo: backward the order and keep track the smaller number with ptr
//todo: big o of this?
// one pointer for interation l of left to right, one pointer for pivot and one pointer of interation from right to left
function quickSortBoth(arr){
  const partition = (l, r)=>{
    const p = l;
    const pivot = arr[p];
    while(l<=r){
      if(arr[l] > pivot && arr[r] < pivot){
        swap(arr, l, r);
        l++;
        r--;
        //!importatn  this place arr[l] we are not sure if it is > pivot, the same for arr[r], so the condition is l<=r
      }
      while(l<=r && arr[l]<= pivot){
        l++;
      }
      while(l<=r && arr[r]> pivot){
        r--;
      }
    }
    swap(arr, p, l-1);
    return l-1;
  }
  const sort = (l, r)=>{
    if(l<r){
      const p = partition(l, r);
      sort(0, p-1);
      sort(p+1, r);
    }
    return arr;
  }
  return sort(0, arr.length -1);
}

const a = [11,5,12,10,7,9];
const b = [10,8,7,6,13,5,12];
// const m = quickSort2(b);
const n = quickSortBoth(b);

console.log(n);
