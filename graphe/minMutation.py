from typing import List

class Solution:
    def minMutation(self, start: str, end: str, bank: List[str]) -> int:
        if start == end: 
            return 0
        
        def diffOne(s:str, t:str) -> bool:
            return sum(m != n for m,n in zip(s,t)) == 1
        
        m = len(bank)
        adj = [[] for _ in range(m)];
        endIndex = -1
        for i, s in enumerate(bank):
            if s==end:
                endIndex = i
            for j in range(i+1, m):
                if diffOne(s, bank[j]):
                    adj[i].append(j)
                    adj[j].append(i)
        q = [i for i,s in enumerate(bank) if diffOne(start, s)]
        vis = set(q)
        step = 1;
        while q:
            tmp = q
            q = []
            for cur in tmp:
                if cur == endIndex:
                    return step
                for nxt in adj[cur]:
                    if nxt not in vis:
                        vis.add(nxt)
                        q.append(nxt)
                step +=1
        return -1       

# a = ("John", "Charles", "Mike")
# b = ("John", "Charles", "Monica")
# x = zip(a,b)

a = ["ab"]
b = ["efg"]
z = zip(a,b)

print(sum(m!=n for m,n in zip(a,b)))
for m,n in zip(a,b):
  print(m,n)
    

# print([[] for _ in range(4)])

# a = ["ab","cd"]
# for i,s in enumerate(a):
#     print(i,s)
start = "AAAAACCC"
end = "AACCCCCC"
bank = ["AAAACCCC","AAACCCCC","AACCCCCC", "ACAAACCC"]
# s = Solution()
# mm = s.minMutation(start,end,bank)