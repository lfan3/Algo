var myPow = function(x, n) {
    if(n === 0)
        return 1;
    return myPow(x, n-1) * x;
};

const a = myPow(2.00000, 10)
