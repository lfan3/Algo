#include <stdio.h>

int main(){
  int i, x[6];
  
  printf("Enter 6 numbers: ");
  for(i=0; i<6; i++){
    scanf("%d", x+1);
    // printf("pointer is %p \n", &x[i]);
    // printf("pointer2 is %p \n", x+i);
  }
  for(i=0; i<6; i++){
    printf("%d\n", *(x+1));
    // printf("pointer is %p \n", &x[i]);
    // printf("pointer2 is %p \n", x+i);
  }
}