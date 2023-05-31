function hj10(input){
  const hash = {};
  let static = 0;
  for(let i=0; i<input.length; i++){
    const code = input.charCodeAt(i);
    if(code>=0 && code <= 127){
      if(!hash[code]){
        static++;
        hash[code] = 1;
      }
    }
  }
  return static
}

const m = hj10("abc");
console.log("m",m)