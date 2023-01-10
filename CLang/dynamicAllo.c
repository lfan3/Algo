#include <stdio.h>
#include <stdlib.h>

int main(){
  int i, n, *ptr;
  printf("how many elements?\n");
  scanf("%d", &n);
  // ptr hold the adress of first int.
  // malloc return a ptr of void and can be casted into pointer of any form
  ptr = (int*) malloc(n * sizeof(int));
  
  for(i=0; i<n; i++){
    scanf("%d",ptr+i);
  }
  printf("the resulte is \n");
  
  for(i=0; i<n; i++){
    printf("%d\n", *(ptr+i));
  }
}