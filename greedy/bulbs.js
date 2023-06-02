/**
 * bulbs
 * @array [1,0,1,0] contains 1 or 0
 * todo: implemented the naive one, here we implement intellegent one
 */
var bulbSwitch = function(n) {
  // 如果cost is even number n[i] is itself, otherwise is !n[i]
  // if n[i] is 0 cost++, otherwise continue
  let cost = 0;
  
  for(let b of n){
    if(cost % 2===1){
      b = b===1 ? 0 : 1;
    }
    if(b===0){
      cost++;
    }
  }
  return cost;
};

console.log(bulbSwitch([1,1,1]))