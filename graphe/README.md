Thinking about graph problem

There are many common graph algoritme problems as below
- bfs traversal graphe
- dfs traversal graphe
- union find
- understanding of indegree and outdegree
- dijkstra  it aimes to solve the finding shortest path problem with the base of bfs, heap, it is a kind of greedy algo
- bell-ford algo  it complemente the dijkstra algo, it can handle negative edge value
- prims'algo  a minimum spannig tree algo to construct a minimum cost of the edges which connected all node
- krusal: same use of prims with the base of union find algo
- floyd-warshall algo: i do not know yet
- topological order
- bulgarian algo for bipatrie problem

----------section------------------

I think the more natural way to learn algo is by solving the problem. so we need to begin with the problem and try different possible solutions to it. Then we try to analyse their performance and understand their good side and bad side.
Below I try to list the type of problems and list also the feasible solutions to them.

solving graph problems processe:
I, FIND CICLE IN A GRAPH
    - Depth-First Search (DFS): DFS is a graph traversal algorithm that can be modified to detect cycles in a graph. In DFS, if a node is visited more than once during the traversal, then there is a cycle in the graph.
    - Breadth-First Search (BFS): BFS can also be used to detect cycles in a graph. In BFS, if a node is visited twice, then there is a cycle in the graph.
    - topological sort for DAG ? why it can detect circle
    - Union-Find: Union-find can be used to detect cycles in an undirected graph. Initially, each vertex is in its own set. As the edges are processed, the sets corresponding to the two vertices connected by the edge are merged using the union operation. If there is an edge that connects two vertices that are already in the same set, then there is a cycle in the graph.

----------section-------------------
1- mergeAccount
   key algo: unionFind and path compression of unionFind
   redo: yes
   feel: quite difficulte this question.