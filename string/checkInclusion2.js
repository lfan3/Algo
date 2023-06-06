// 双指针的方法
var checkInclusion = function(s1, s2) {
    let fast = 0;
    let slow = 0;
    const hash = new Map();
    const len = s1.length;
    for (let i = 0; i < s1.length; i++) {
        const ch = s1[i];
        if(hash.get(ch)){
            hash.set(ch, hash.get(ch)-1);
        }else{
            hash.set(ch, -1)
        }
    };
    for(;fast<s2.length; fast++){
        if(hash.has(s2[fast])){
            hash.set(s2[fast], hash.get(s2[fast])+1);
        }

        while(checkHash(hash)){
            if(fast-slow+1 === len){
                return true;
            }
            if(hash.has(s2[slow])){
                hash.set(s2[slow], hash.get(s2[slow])-1);
            }
            slow++;
        }
    }
    return false;
}

var checkHash = (hash)=>{
    const vals = Array.from(hash.values());
    return vals.filter(v=>v<0).length ? false : true;
}

s1 =
""
s2 =
"acetylphenylhydrazine"
const m = checkInclusion(s1, s2);
console.log("m",m)