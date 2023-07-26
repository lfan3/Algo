# var findNumberIn2DArray = function(matrix, target) {
#     const rows = matrix.length;
#     if(!rows) return false;
#     const cols = matrix[0].length;

#     let r = 0;
#     let c = cols-1;
#     while(c<cols && c >=0 && r >=0 && r< rows){
#         let root = matrix[r][c];
#         if(target > root){
#             r++;
#         }else if(target < root){
#             c--;
#         }else{
#             return true;
#         }
#     }
#     return false;
# };
def findNumberIn2DArray(matrix, target):
    rows = len(matrix)
    if rows == 0:
      return False
    cols = len(matrix[0])
    r = 0
    c = cols -1
    while( c< cols and c>= 0 and r >= 0 and r<rows):
      root = matrix[r][c]
      if target > root:
       r += 1
      elif target < root:
       c -= 1
      else:
        return True
    
    return False

matrix = [[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]];
r = findNumberIn2DArray(matrix, 5)
print("r", r)
       
          
       
          
    