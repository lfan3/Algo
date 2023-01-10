#include <stdio.h>
#include <stdlib.h>

typedef struct Node{
  int vertex;
  struct Node* next;
} Node;

typedef struct Graph{
  int numVertices;
  Node** adjLists;
} Graph;

Node* createNode(int vertex){
  Node* newNode = (Node *)malloc(sizeof(Node));
  newNode->vertex = vertex;
  newNode->next = NULL;
  return newNode;
}

Graph* createGraph(int vertexNum){
  Graph* graph= malloc(sizeof(Graph));
  Node** adjLists = malloc(sizeof(Node*) * vertexNum);
  graph->numVertices = vertexNum;
  graph->adjLists = adjLists;
  return graph;
}

void addEdge(Graph* graph, int s, int t){
  // add t to s
  Node* newNode = createNode(t);
  newNode->next = graph->adjLists[s];
  graph->adjLists[s] = newNode;
  // add s to t
  newNode = createNode(s);
  newNode->next = graph->adjLists[t];
  graph->adjLists[t] = newNode;
}

void dfs(Graph *graph){
  int nodeNum = graph->numVertices;
  
  
}

void printGraph(Graph* graph){
  for(int i=1; i<=graph->numVertices; i++){
    Node* tmp= graph->adjLists[i];
    printf("graph adjLists[%d] ", i);
    while(tmp){
      printf("%d ",tmp->vertex);
      tmp = tmp->next;
    }
    printf("\n");
  }
}

int main (void){
  Graph* g = createGraph(3);
  addEdge(g, 1,2);
  addEdge(g, 1,3);
  addEdge(g, 2,3);
  printGraph(g);
  
}





