// const regex = /a/g
// // const regex = RegExp('a', 'g')
// console.log(regex.test("abc"))  // --> true
// console.log(regex.test("abc"))  // --> false
// console.log(regex.test("abc"))  // --> true

// const regex2 = /a/
// console.log(regex2.test("abc"))
// console.log(regex2.test("abc"))
// console.log(regex2.test("abc"))

// const regex = /^[ASWD]{1}\d{1,2}$/g  
// console.log(regex.test("A20"))  // --> true
// console.log(regex.lastIndex)  // -->3
// console.log(regex.test("A20"))  // --> false
// console.log(regex.test("A20"))  // --> true

const repeat = /(.{3,})\1([c|d])\2/ 
const str = "abcabcdd";
console.log(repeat.test(str) )