class Node{
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

const a = new Node('A');
const b = new Node('B');
const c = new Node('C');
const d = new Node('D');
const e = new Node('E');
const f = new Node('F');

a.next = b;
b.next = c;
c.next = d;
d.next = e;
e.next = f;

function printLinkedList(head){
    let curr = head;
    while(curr){
        console.log(curr.val);
        curr = curr.next
    }
}

function printRec(head){
    if(!head)
        return;
    printRec(head.next);
    console.log(head.val);

}

printLinkedList(a);
console.log('-----------')
printRec(a)