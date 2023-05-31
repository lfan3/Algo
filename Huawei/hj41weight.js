// 这道题非常有趣。
// 不断拓展集合
function weight(typeNum, weight, quantity) {
  //单独某种砝码, 0 也算一种
  const result = [0];
  const weightHash = {};
  for (let i = 0; i <= typeNum; i++) {
    const w = weight[i];
    // !已经存在的重量,上一个种类的。这个位置比较重要
    const len = result.length;
    for (let j = 1; j <= quantity[i]; j++) {
      // 取 j 个 weight[i]
      const dw = w * j;
      for(let k=0; k<len; k++){
        const nw = result[k] + dw;
        // 多余一种的。在现有的重量基础之上加上，注意去重。
        // 循环会太慢 O(n),使用hash O(1)
        // if (result.indexOf(nw) === -1) {
        //   result.push(nw);
        // }
        // 这里注意0
        if(weightHash[nw] === undefined){
          result.push(nw);
          weightHash[nw] = 1;
        }
      }
    }
  }
  return result;
}

const w = weight(3, [1,2,3], [2,1,1]);
console.log(w)
