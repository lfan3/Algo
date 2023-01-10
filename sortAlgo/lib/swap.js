function swap(array, i, j){
    const temp = array[i];

    array[i] = array[j];
    array[j] = temp;
}

const arr = [1,2];
swap(arr, 0, 1);

module.exports = swap;