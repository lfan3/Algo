// backtracking and dynamic programming are both to list all the posibilities. 
// but dynamic programming is to find the optimal solution
// backtracking is to get all the solutions

function seatsArrangement(){
  const people = ['b1', 'b2', 'g1'];
  const res = [];
  const sz = people.length;
  const backtrack = (peopleCom)=>{
    if(peopleCom.length >= sz){
      const m = peopleCom.map(i=>i);
      res.push(m);
      // res.push(peopleCom.splice(0,sz));
      return;
    }
    // 会返回 和peopleCom 没关系 而是和callstack相关， 执行完就会返回
    for(let i=0; i<sz; i++){
      if(peopleCom.indexOf(people[i]) === -1){
        if(peopleCom.length === 1 && people[i] === 'g1') continue;
        peopleCom.push(people[i]);
        backtrack(peopleCom);
        peopleCom.pop();
      }
    }
  }
  backtrack( []);

  return res;
}



             



const m = seatsArrangement();
console.log('m', m)
