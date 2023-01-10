// technique: look at the diskNum of A , image we have three disks L M N from top to bottom
// step1: there are three disk on A, we move the L disk from A to C (from, to)
// step2: there are 3-1 diskNum now on A, we move the M disk of A to B (from, auxiliary)
// step3: there are still 3-1 diskNum on A, we move the L disk from C to B (auxiliary, to)
// step4: we continue the same steps from 1 to 3;
function honoiTower(diskNum, from, to, auxiliary){
    if(diskNum <= 0)
        return;
    honoiTower(diskNum-1, from, auxiliary, to);
    console.log(`move from ${from} to ${to}`);
    honoiTower(diskNum-1, auxiliary, to, from);
}

honoiTower(3,"A","C","B")

function honoiTower2(diskNum, from, to, via){
    if(diskNum>0){
        honoiTower2(diskNum-1, from, via, to);
        console.log(`move one disk from ${from}-${to}`);
        honoiTower2(diskNum-1, via, to, from);
    }
}

honoiTower2(3, "a","c","b");









