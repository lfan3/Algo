/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function(n, flights, src, dst, k) {
    let table = Array(n).fill(Infinity);
    let tmp = Array(n).fill(Infinity);

    table[src] = 0;
    tmp[src] = 0;
    let layer = 0;
  
    while(layer < k+1){
        flights.forEach(f => {
            const [from, to, dist] = f;
            // show how bellfordman's algo propagated edges by edges --- propagation process
            // tip: use the previous state table
            const toNewDistance = table[from] + dist;
            // tip: compare the current state table
            if(tmp[to] > toNewDistance){
                tmp[to] = toNewDistance;
            }
            console.log(from, to, dist, tmp)

        });
        const t = table;
        table = tmp;
        tmp = t;
        layer++;
    }
    console.log(table)
    return table[dst] === Infinity ? -1 : table[dst]
};



const n = 4
const flights = [[0,1,100],[1,2,100],[2,0,100],[1,4,600],[2,3,200]]; 
const src = 0;4
const dst = 3; 
const k = 1
// console.log(findCheapestPrice(n, flights, src, dst, k));

const flights2 = [[4,1,1],[1,2,3],[0,3,2],[0,4,10],[3,1,1],[1,4,3]]
const n2 = 5;
const src2 = 2; 
const dst2 = 1; 
const k2 = 1
// console.log(findCheapestPrice(n2, flights2, src2, dst2, k2));

const flights3 = [[0,1,1],[0,2,5],[1,2,1],[2,3,1]]
const n3 = 4
const src3 = 0
const dst3 = 3
const k3 = 1

const flights4 = [[0,1,2],[1,2,1],[2,0,10]]
const n4 = 3
const src4 = 1
const dst4 = 2
const k4 = 1
console.log("an",findCheapestPrice(n4, flights4, src4, dst4, k4));

