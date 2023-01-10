/**
 * @param {string} s
 * @return {string}
 */
 var replaceSpace = function(s) {
  return s.replace(/ /g, '%20')
};

const s = "We are happy.";
// learned: replace does not modify the original string
const r = replaceSpace(s);
console.log(s,r);
