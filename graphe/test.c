
#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
  int vertex;
  struct Node* next;
} Node;

Node* createNode(int vertex){
  Node* newNode = (Node *)malloc(sizeof(Node));
  newNode->vertex = vertex;
  newNode->next = NULL;
  return newNode;
} 

int main(){
  int i = 4;
  Node *p = malloc(sizeof(Node));
  Node **n = malloc(sizeof(Node*));
  printf("p %p\n", p);
  printf("n %p\n", n);
  
  Node *node = createNode(5);
  printf("node next %p\n", node->next);
  node->next = p;
  printf("node next %p\n", node->next);
  
}