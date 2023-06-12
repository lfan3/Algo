from collections import defaultdict
from typing import List

class UnionFind:
  def __init__(self, n): #new
    self.par = [i for i in range(n)] #new
    
  def union(self, x, y): #new
    self.par[self.find(y)] = self.find(self.par[x])
  
  def find(self, x):
    if(self.par[x] != x):
      self.find(self.par[x])
    return x
  
  def getPar(self):
    return self.par
  
class UnionFindPC: #path compression
  def __init__(self, n):
    self.par = [i for i in range(n)]
  
  def find(self, x, y):
    while(x != self.par[x]):
      self.par[x] = self.par[self.par[x]]
      x = self.par[x]
    return x
  
  def union(self, x1, x2):
    p1, p2 = self.find(x1), self.find(x2)
    if p1==p2:
      return False
  
  
class Solution:
  def accountsMerge(self, accounts: List[List[str]]) -> List[List[str]]:
    uf = UnionFind(len(accounts))
    emailToAcc = {} # email -> index of account
    
    for i, a in enumerate(accounts): #new
      for e in a[1:]: #new
        if e in emailToAcc:
          uf.union(i, emailToAcc[e])
        else:
          emailToAcc[e] = i
    
    emailGroup = defaultdict(list) #new
    for e, i in emailToAcc.items(): #new
      leader = uf.find(i)
      emailGroup[leader].append(e)
      
    res = []
    for ai, es in emailGroup.items():
      name = accounts[ai][0]
      esorted = sorted(es)
      print(es, esorted)
      res.append([name] + esorted) #new array concat
    return res

accounts = [["John", "johnsmith@mail.com", "john00@mail.com"], ["John", "johnnybravo@mail.com"], ["John", "johnsmith@mail.com", "john_newyork@mail.com"], ["Mary", "mary@mail.com"]];
  
s = Solution()
s.accountsMerge(accounts)
 

    
    