/**
 * @param {string} s
 * @return {string}
 */
var replaceSpace = function(s) {
  return s.replace(/\s/g, '%20');
};

const s = "We are happy."
replaceSpace(s);