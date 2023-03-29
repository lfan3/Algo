function c(t){
  console.log('t',t)
  if(t >=3){
    return;
  }
  for(let i=0;i<2; i++){
    c(++t)
  }
}
              c(1)
          c(2)      c(3)
       c(3) c(4)    

function m(t){
  console.log('tm',t);
  if(t >=3){
    return;
  }
  for(let i=0;i<2; i++){
    m(t+1)
  }
}
             m(1)
        m(2)     m(2)
    m(3)  m(3)  m(3)  m(3)
c(1)
m(1)