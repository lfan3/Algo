void backtrack(res, args){
  if(goal reached){
    add solution to res;
    return
  }
  for(let i=0; N all choises; i++){
    if(choise is valide){
      make choise
      backtrack(res, args);
      undo choise
    }
  }
}