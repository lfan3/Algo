from typing import List

class Solution:
    def minReorder(self, n:int, connections: List[List[int]]) -> int:
      # set comprehension
      edges = {(a,b) for a,b in connections}
      # dictionary comprehension
      neighbours = {city:[] for city in range(n)}
      print("n", neighbours)
      
s = Solution()
c= [[0,1],[1,3],[2,3],[4,0],[4,5]]

s.minReorder(6,c)