#include <stdio.h>
#include <string.h>

struct Person {
  char name[50];
  int age;
};

int main(){
  struct Person personA;
  // Arrays and strings are second-class citizens in C; they do not support the assignment operator once it is declared. For example,
  strcpy(personA.name, "George Orwell");
  personA.age = 55;
  printf("Name: %s\n", personA.name);
  printf("age: %d\n", personA.age);
}