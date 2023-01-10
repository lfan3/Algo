#include <stdio.h>

int main(int argc, char* argv[]){
  enum suit {
    one, two, three
  };
  enum suit a = one;
  printf("a is %d\n", a);
  
  
  enum flag {
    yi= 1,
    er=2,
    si=4
  };
  int five = yi | si;
  int san = yi | er;
  printf("five is %d\n", five);
  printf("three is %d\n", san);
}