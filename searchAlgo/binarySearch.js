class BinarySearch{
  constructor(orderedArr){
    this.arr = orderedArr;
  }
  searchIterative(n){
    let left = 0;
    let right = this.arr.length -1;
    
    while(left <= right){
      const mid = Math.floor((left+right)/2);
      if(this.arr[mid]=== n){
        return mid;
      }else if(this.arr[mid]<n){
        left = mid +1;
      }else{
        right = mid - 1;
      }
    }
    return -1;
  }
  
  search(n){
    let left = 0;
    let right = this.arr.length -1;
    return this.searchRecursive(n, left, right);
  }
  
  searchRecursive(n,left,right){
    if(left > right)
      return -1;
    const mid = Math.floor((left+right)/2);
    if(this.arr[mid]=== n){
      return mid;
    }else if(this.arr[mid]<n){
      return this.searchRecursive(n, left+1, right);
    }else{
      return this.searchRecursive(n, left, right-1);
    }
  }
}

const arr = [1,4,6,9,15,16,20]
const bs = new BinarySearch(arr);
const i = bs.searchIterative(6);
const i2 = bs.search(6);
console.log('i',i);
console.log('i2',i2);
