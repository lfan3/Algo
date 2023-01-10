// DFS algorithm in C

#include <stdio.h>
#include <stdlib.h>

// 两个struct一个使用typedef 另一个不适用typedef 
// vertices is the plural form of vertex
typedef struct Node{
  int vertex;
  // struct name should be given,没有名字会报错
  struct Node* next;
} Node;

struct Graph{
  int numVertices;
  // store the ptr which point to the first Node pointer. so it is a pinter of pointer
  Node** adjLists;
};
Node* createNode(int v);
struct Graph* createGraph(int numVertices);

Node* createNode(int v){
  Node* newNode = (Node*) malloc(sizeof(Node));
  newNode->vertex = v;
  newNode->next = NULL;
  return newNode;
};

struct Graph* createGraph(int numVertices){
  struct Graph* graph = (struct Graph*)malloc(sizeof(struct Graph));
  graph->numVertices = numVertices;
  graph->adjLists = (Node**)malloc(numVertices * sizeof(Node*));
  
  // 有必要吗？
  for(int i=0; i<numVertices; i++){
    // 难点:
    graph->adjLists[i] = NULL;
  }
  return graph;
}
// graph 只有序号没有label
void addEdge(struct Graph* graph, int source, int destination){
  // ...d2->d1->s
  Node* vertex = createNode(destination);
  vertex->next = graph->adjLists[source];
  graph->adjLists[source] = vertex;
  
  // ...s2->s1->d
  vertex = createNode(source);
  vertex->next = graph->adjLists[destination];
  graph->adjLists[destination] = vertex;
}

void printGraph(struct Graph* graph){
  int v;
  for(v=0; v<graph->numVertices; v++){
    Node* temp = graph->adjLists[v];
    printf("Vertex %d:\n", v);
    while(temp){
      printf("%d->", temp->vertex);
      temp = temp->next;
    }
    printf("\n");
  }
}

int main() {
  struct Graph* graph = createGraph(4);
  addEdge(graph, 0, 1);
  addEdge(graph, 0, 2);
  addEdge(graph, 0, 3);
  addEdge(graph, 1, 2);

  printGraph(graph);

  return 0;
}