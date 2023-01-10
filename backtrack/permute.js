var permute = function(nums) {
    const result = [];
    const content = [];

    const bt = (content) => {
        if(content.length === nums.length) {
            const contentClone = content.map(c => c);
            result.push(contentClone);
            return;
        }
        for(let i=0; i<nums.length; i++) {
            if(!content.includes(nums[i])){
                content.push(nums[i]);
                bt(content);
                content.pop();
            }
        }
    }
    bt(content);
    return result;
};

var input = [1,2,3];

console.log(permute(input));