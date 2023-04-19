const {ListNode, geneList} = require('../lib');

function sortList(list){
  const sort = ()=>{
    const g = geneList([8,4,5,7,3,1]);
    const h1 = g; 
    const h2 = g.next.next.next;
    const m = mergeTwoList(h1, h2);
    console.log('m', m, m.next.next)
    
  }
  const mergeTwoList = (list1, list2)=>{
    if(!list1){
      return list2;
    }
    if(!list2){
      return list1;
    }
    if(list1.val < list2.val){
      list2.next = mergeTwoList(list1, list2.next);
      return list2;
    }else{
      list1.next = mergeTwoList(list1.next, list2);
      return list1;
    }
  }
  sort();
}



function main(){
  const a = [4,1,3,5,2];
  const list = geneList(a);

  
 sortList(list);
}

main();