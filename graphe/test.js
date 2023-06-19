
const graph = [[1],[0]]

const m = [
  {"a":12,"b":{"a":[12,13]}},
  {"a":2,"b":14}
]
const c = [...m]
console.log("c", c, c===m)
