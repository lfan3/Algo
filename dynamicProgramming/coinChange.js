// bottom down, dp
var coinChange = function(coins, amount) {
  const arr = new Array(amount+1).fill(Number.MAX_VALUE);
  arr[0] = 0;
  
  for(let i=1; i<=amount; i++){
    let min = arr[i];
    for(let coin of coins){
      const rest = i - coin;
      if(rest>=0){
        const num = arr[rest];
        // difficulte to find all conditions
        if(num>=0 && num<min){
          min = num
        }
      }
    }
    // difficulte condition
    if(min === Number.MAX_VALUE || min === -1){
      arr[i] = -1;
    }else{
      arr[i] = min + 1;
    }
  }
  return arr[amount];
};

// bottom down, optimiser spaces
var coinChange2 = function(coins, amount) {
  const arr = new Array(amount+1).fill(Number.MAX_VALUE);
  arr[0] = 0;
  
  for(let i=1; i<=amount; i++){
    let min = arr[i];
    for(let coin of coins){
      const rest = i - coin;
      if(rest>=0){
        const num = arr[rest];
        // difficulte to find all conditions
        if(num>=0 && num<min){
          min = num
        }
      }
    }
    // difficulte condition
    if(min === Number.MAX_VALUE || min === -1){
      arr[i] = -1;
    }else{
      arr[i] = min + 1;
    }
  }
  return arr[amount];
};

function main(){
  const coins = [1, 2, 5];
  const amount = 11;
  
  const r = coinChange([1,2], 3);
  const r2 = coinChange([2], 3);
  const r4 = coinChange([3], 1);
  const r3 = coinChange([186,419,83,408], 6249);
  
  console.log(r, r2,r3, r4)
  
}

main()