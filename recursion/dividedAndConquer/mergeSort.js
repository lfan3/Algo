function mergeSort(arr=[]){
  const sort = (l, r, arr)=>{
    if(l>=r) return
    const mid = Math.floor((l+r)/2);
    sort(l, mid, arr);
    sort(mid+1, r, arr);
    merge(l, mid, r, arr);
  }
  
  const sort2 = (l, r, arr)=>{
    if(l<r){
      const mid = Math.floor((l+r)/2);
      sort(l, mid, arr);
      sort(mid+1, r, arr);
      merge(l, mid, r, arr);
    }
  }
  /// it is difficult to implemented in place sort of merge.
  // create tmp arr 
  // copie tmp arr to original arr
  const merge = (start, mid, end,arr)=>{
    const tmp = new Array(end-start+1);
    let i=start, j=mid+1, k=0;
    while(i<=mid && j<=end){
      if(arr[i] < arr[j]){
        tmp[k] = arr[i];
        i++;
      }else{
        tmp[k] = arr[j];
        j++;
      }
      k++;
    }
    while(i<=mid){
      tmp[k] = arr[i];
      i++;
      k++;
    }
    while(j<=end){
      tmp[k] = arr[j];
      j++;
      k++;
    }
    for(let j=start, k=0; j<=end; k++,j++){
      arr[j] = tmp[k];
    }
  }
  sort(0, arr.length-1, arr);
  return arr;
}

const m = mergeSort([1,3,6,9,2,4])
console.log(m)
     
