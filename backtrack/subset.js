var subsets = function(nums) {
    const result = [];
    const subset = [];
    backtrack = (index, subset, result)=>{
        if(index === nums.length){
            //！！需要克隆！
            const subsetClone = subset.map(s => s);
            result.push(subsetClone);
            return;
        }else{
            subset[index] = 0;
            backtrack(index+1, subset, result);
            subset[index] = 1;
            backtrack(index+1, subset, result);
        }
    }
    backtrack(0, [], result);
    return result;
};

const num = [1,2,3]
console.log(subsets(num));