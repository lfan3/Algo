// think from the aspect of indegree and outdegree
var findJudge = function(n, trust) {
    const indegree = new Array(n+1).fill(0);
    const outdegree = new Array(n+1).fill(0);
    for(let i=1; i<=n; i++){
        const [a, b] = trust[i];
        indegree[b] += 1;
        outdegree[a] += 1;
    }
    for(let i=1; i<=n; i++){
        if(indegree[i] === n-1 && outdegree[i] === 0){
            return i;
        }
    }
    return -1
}