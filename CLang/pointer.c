#include <stdio.h>
#include <stdlib.h>

int main(){
  // letters is a ptr poited to 4 bytes(4 charts);
  // ptr is a int ptr pointed to one int 
  // if a give the adress of 4 chars to int, the int will take the 4 bytes and produce a int
  char letters[] = {'A','B','C','D'};
  int* ptr;
    
  ptr = (int *)&letters;
  number = *ptr;
}