/**
 * @param {number} n
 * @param {number} headID
 * @param {number[]} manager
 * @param {number[]} informTime
 * @return {number}
 */
var numOfMinutes = function(n, headID, manager, informTime) {
    const managerHash = new Map();
    let time = 0;
    let max = 0;
    for(let i=0; i<n; i++){
        const m = manager[i];
        if(!managerHash.has(m)){
            managerHash.set(m, [i])
        }else{
            const oldEmp = managerHash.get(m);
            const nEmp = [...oldEmp, i];
            managerHash.set(m, nEmp);
        }
    }

    const dfs = (manager, hash)=>{
        if(!hash.get(manager)) return;
        time += informTime[manager];
        max = Math.max(time, max);
        const emps = hash.get(manager)
        for(let ep of emps){
            dfs(ep, hash);
            time -= informTime[ep];
        }
    }
    // 另外一种dfs
    // need to rethink
    const dfs2 = (manager, hash)=>{
        let res = 0
        const emps = hash.get(manager) || []
        console.log("mana", manager)
        for(let ep of emps){
            res = Math.max(res, dfs2(ep, hash));
        }

        return informTime[manager] + res;
    }

    return dfs2(headID, managerHash);
    // return max;
};

const n = 6;
const headID = 2;
const manager = [3,2,-1,2,3,1];
const informTime = [0,1,1,1,0,0];
console.log(numOfMinutes(n, headID, manager, informTime));