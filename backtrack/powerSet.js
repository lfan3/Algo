const N =  3;

function powerset() {
    const bitstr = [];
    const bits = [0,0,0];
    generateBitstr(0, bits, bitstr);
    return bitstr;
}

function generateBitstr(i, bits, bitstr){
    if(i === N){
        const str = bits.join("");
        bitstr.push(str);
    }
    else{
        bits[i] = 1;
        generateBitstr(i+1, bits, bitstr);
        bits[i] = 0;
        generateBitstr(i+1, bits, bitstr);
    }
}

console.log(powerset());