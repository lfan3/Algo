var subsets = function(nums) {
    const len = nums.length;
    const result = [];
    const finalResult = [];
    const backtrack = (arr, i) => {
        if(i === len){
            result.push(arr.map(a=>a));
            return;
        } else {
            arr[i] = 0;
            backtrack(arr, i+1);
            arr[i] = 1;
            backtrack(arr, i+1);
        }
    }
    const geneSubset = (result)=>{
        for(let item of result){
            const arr = [];
            for(let i=0; i<result.length; i++){
                if(item[i]){
                    arr.push(nums[i]);
                }
            }
            finalResult.push(arr);
        }
    }
    backtrack([], 0);
    geneSubset(result);
    return finalResult
}

subsets([1,2,3]);