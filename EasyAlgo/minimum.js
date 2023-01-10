var minArray = function(numbers) {
    const len = numbers.length;
    for(let i=0; i<len-1; i++) {
        if(numbers[i] > numbers[i+1]){
            return numbers[i+1]
        }
    }
    return numbers[0];
};

const m = minArray([3,4,5,1,2] );
const r = minArray([2,2,2,0,1])
const k = minArray([2,2,2])
            return numbers[i+1]
            console.log(m, r, k);