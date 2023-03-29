function sum(num){
  if(num==0){
    return num
  }
  return num + sum(num-1);
}

const k = sum(10)
console.log('k',k);
