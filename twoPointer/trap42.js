var trap = function(height) {
  const len = height.length;
  let l = 0;
  let r = len - 1;
  let lmax = height[left];
  let rmax = height[right];
  let volum = 0;
  let totalVolum = 0;
  
  while(l<r){
    // 选左右两边比较矮的一端
    if(lmax < rmax){
      volum = lmax - height[l];
    }else{
      volum = rmax - height[r];
    }
    if(volum>=0){
      totalVolum += volum;
    }
    // 判断移动
    if(height[l] < height[r]){
      l++;
      lmax = Math.max(height[l], lmax);
    }else{
      r--;
      rmax = Math.max(height[r], rmax);
    }
  }
  return volum;
}