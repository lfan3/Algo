// 如果不是发 C 的音， 需要跟踪前一个音是否已经有青蛙发出了。如果有的话，发出前声音的青蛙数量需要减少一个
// 如果发出了K的音，那么一个青蛙结束了发音，正在发音的青蛙数量减1
// 如果结束了之后，仍然有青蛙在发音，说明不是 有效的发音。-1
// 如果前一个声音没有青蛙在发音，也不是有效的-1
function minNumberOfFrogs(croakOfFrogs){
  const croaking = {
    "c":0,
    "r":1,
    "o":2,
    "a":3,
    "k":4,
  };
  // number of frog which are crying
  const criOrder = [0,0,0,0,0];
  let frog_num = 0;
  let min_frog_number = 0;
  
  for(let i=0; i<croakOfFrogs.length; i++){
    if(croakOfFrogs[i] === 'c'){
      criOrder[0]++;
      frog_num++;
      if(frog_num> min_frog_number){
        min_frog_number = frog_num;
      }
    }else{
      const index = croaking[croakOfFrogs[i]];
      const pre = index-1;
      if(!criOrder[pre]){
        return -1;
      }
      criOrder[pre]--;
      criOrder[index]++;
      if(index===4){
        frog_num--;
      }
    }
  }
  if(frog_num){
    return -1;
  }
  return min_frog_number;
};

const croakOfFrogs = "croakcroa"
const c = minNumberOfFrogs(croakOfFrogs)
console.log("c", c);