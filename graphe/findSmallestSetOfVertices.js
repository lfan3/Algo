/**
 * @param {number} n
 * @param {number[][]} edges
 * @return {number[]}
 * 可以从出入度角度考虑
 * 先排出adjacent list， 然后 greedy 寻找元素最多的A。
 * update 其他的node，将A中含有的元素去掉，然后再greedy的选剩下元素最多的
 */
var findSmallestSetOfVertices = function(n, edges) {

};