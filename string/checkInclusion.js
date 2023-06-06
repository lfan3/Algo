// 先找所有permutation 但是这种方法太慢。如果S1很长 那就不行了， 看checkInclusion2.js
var checkInclusion = function(s1, s2) {
    const hash = new Map();
    const len = s1.length;
    const tmp = [];
    const permute = [];
    for (let i = 0; i < s1.length; i++) {
        const ch = s1[i];
        if(hash.get(ch)){
            hash.set(ch, hash.get(ch)+1);
        }else{
            hash.set(ch, 1)
        }
    };
    const dfs = (arr)=>{

        if(arr.length === len){
            const str = arr.join('');
            permute.push(str);

            return;
        }
        for(let [key, value] of hash.entries()){
            if(value > 0){
                hash.set(key, value-1);
                arr.push(key);
                dfs(arr);
                arr.pop();
                hash.set(key, value);
            }
        }
    }
    dfs(tmp);

    for(let i=0; i<permute.length; i++){
        if(s2.match(permute[i])){
            return true;
        }
    }
    return false;
};



   
