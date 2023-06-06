// https://dev.to/dvddpl/why-is-my-regex-working-intermittently-4f4g#:~:text=If%20not%20strictly%20necessary%2C%20avoid%20the%20global%20flag,to%20a%20constant%20or%20any%20regex%20define%20elsewhere%29
// bug of RegExp with "g"


function movePosition(str){
  const arr = str.split(";");
  const regex = /^[ASWD]{1}\d{1,2}$/
  
  let x = 0; y = 0;
  const valid = arr.filter(p=>regex.test(p));
  for(let i=0; i<valid.length; i++){
    const l = valid[i].charAt(0);
    const num = +valid[i].substring(1);
    
    switch (l){
      case "A":
        x-= num;
        break;
      case "S":
        y-= num;
        break;
      case "W":
        y+= num;
        break
      default:
        x+=num;
    }
  }
  return `${x},${y}`
}



const m =movePosition("A10;S20;W10;D30;X;A1A;B10A11;;A10;");
console.log("m",m)