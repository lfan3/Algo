function decimalToBinary(n){
  if(n===1){
    return n.toString();
  }
  const quotient = Math.floor(n/2);
  const remainder = n - quotient*2;
  return decimalToBinary(quotient) + remainder.toString();
}

const m = decimalToBinary(10);

console.log('m',m);
