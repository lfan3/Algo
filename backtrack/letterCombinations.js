/**
 * backtrack: recursive in a loop
 */
var letterCombinations = function(digits) {
    const array = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    const digitArr = Array.from(digits).map(n => parseInt(n));
    const res = [];
    const backTrack = (index, currStr)=>{
        if(currStr.length === digits.length){
            if(digits === "")
                return res;
            res.push(currStr);
        }
        if(digitArr[index]){
            const item = array[digitArr[index]];
            for(let i=0; i<item.length; i++) {
                backTrack(index+1, currStr + item[i]);
            }
        return res;
    }
    }
    return backTrack(0, "");
};


var letterCombinations1 = function(digits) {
    const array = ["","","abc","def","ghi","jkl","mno","pqrs","tuv","wxyz"];
    const digitArr = Array.from(digits).map(n => parseInt(n));
    const res = [];
    const backtrack = (currStr, digitIndex) => {
        if(currStr.length === digitArr.length) {
            res.push(currStr);
            return;
        }
        const str = array[digitArr[digitIndex]];
        for(let i=0; i<str.length; i++) {
            backtrack(currStr+str[i], digitIndex+1);
        }
    }
    backtrack("", 0);
    return res;
};
const r = letterCombinations1("23");
console.log(r);



