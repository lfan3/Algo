// it is not the most optimised way
var numPairsDivisibleBy60 = function(time) {
  let res = 0;
  for(let i=0; i<time.length; i++){
    for(let j=i+1; j<time.length; j++){
      const total = time[i] + time[j];
      if(total%60 === 0){
        res++;
      }
    }
  }
  return res;
};

const time = [30,20,150,100,40];
const time2 = [60,60,60];

const m = numPairsDivisibleBy60(time2);
console.log('m',m)