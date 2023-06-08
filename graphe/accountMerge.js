const UnionFind = require("./unionFind/unionfindPathCompression");

function accountsMerge(accounts){
    const emailToAccount = new Map(); //email ->account index
    const accountToEmail = new Map(); //account index -> email
    const size = accounts.length;
    const uf = new UnionFind(size);
    const result = [];

    for(let i=0; i<size; i++){
        const account = accounts[i];
        const len = account.length;
        for(let j=1; j<len; j++){
            const email = account[j];
            if(emailToAccount.has(email)){
                const index = emailToAccount.get(email);
                uf.union(i, index);
            }else{
                emailToAccount.set(email, i);
            }
        }
    }
    // !quite difficulte
    for(let [email, index] of emailToAccount.entries()){
        const root = uf.find(index);
        if(accountToEmail.has(root)){
            accountToEmail.get(root).push(email);
        }else{
            accountToEmail.set(root, [email]);
        }
    }

    // arrange data
    for(let [accountIndex, emails] of accountToEmail.entries()){
        emails.sort();
        const account = accounts[accountIndex];
        const name = account[0];
        result.push([name, ...emails]);
    }
    return result;
}

const accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]];
const r = accountsMerge(accounts);
console.log("re", r)