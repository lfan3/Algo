var accountsMerge = function(accounts) {
  const len = accounts.length;
  const hash = {};
  
  const insertHash = (key,val)=>{
    if(!hash[key]){
      hash[key] = [val];
    }else{
      hash[key].push(val);
    }
  }
  
  const iterateHash = (hash)=>{
    const accountGroupIndexArray = Object.values(hash);
    for(let [email, accountIndexs] of Object.entries(hash)){
      console.log(email, accountIndexs)
      const accountName = accounts[accountIndexs[0]];
      
    }
  }
  
  for(let i=0; i<len; i++){
    let j = 1;
    const account = accounts[i]
    while(j<account.length){
      const email = account[j];
      insertHash(email, i);
      j++;
    }
  }
  console.log("hash", hash)
};

const accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]];
accountsMerge(accounts)