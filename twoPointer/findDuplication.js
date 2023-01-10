var findDuplicate = function(nums) {
    let slow = fast = 0;
    // ! floyd detection of cycle
    // ! l'utilisation of do while loop
    do{
        slow = nums[slow];
        fast = nums[nums[fast]]; 
    }while(nums[slow] !== nums[fast]);

    slow = 0;
    while(nums[fast] !== nums[slow]){
        fast = nums[fast];
        slow = nums[slow];
    }
    return nums[fast];
};

const a = [1,3,4,2,2];
const r = findDuplicate(a);
console.log(r);
