function reverseString(str){
  return  Array.from(str).reverse().join('');
}

function reverseStringR(str){
  if(str === ''){
    return '';
  }
  return reverseStringR(str.substring(1)) + str.charAt(0);
}

const a = 'abcd';
const m = reverseString(a);
const n = reverseString(a);
console.log('m', reverseString(a))
console.log('n', reverseStringR(a))
