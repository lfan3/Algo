from typing import List

# dfs
# go to each neigbour
#see if there is connection beween the node and its neighb, if there is continue, if not cout++
# if neibour has unvisited neigbour, continue the step 2

class Solution:
    def minReorder(self, n: int, connections: List[List[int]]) -> int:
      # set comprehension
      edges = {(a,b) for a,b in connections}
      # dictionary comprehension
      neighbours = {city:[] for city in range(n)}
      visited = set()
      visited.add(0)
      counter = 0
      
      for (a,b) in connections:
         neighbours[a].append(b)
         neighbours[b].append(a)
         
      def dfs(node):
         nonlocal edges, neighbours, visited, counter
         for neigh in neighbours[node]:
            if neigh in visited: continue;
            if not (neigh, node) in edges: 
              counter +=1
            visited.add(node)
            dfs(neigh)
      dfs(0)
      return counter
            
      
s = Solution()
c= [[0,1],[1,3],[2,3],[4,0],[4,5]]

print(s.minReorder(6,c))
