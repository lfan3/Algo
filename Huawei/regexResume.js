/**
 * description
 * .  -- any character except new line
 * \d -- digit(0-9)
 * \D -- not a digit
 * \w --- word caracter (a-z A-Z 0-9 _)
 * \W --- not a word caracter (whit space special sign, not a _)
 * \s -- white space (space tab newline)
 * \S -- not white space
 * 
 * \b -- word boundary
 * \B -- not word boundary
 * ^  -- begin of string
 * $  -- end of a string
 * 
 * [] -- match one the letter inside
 * [^] -- not match
 * |
 * () --group M(r|rs|s)
 * 
 * * 0 or more
 * + one or more
 * ? 0 or one
 * {3} exact number
 * {3,4} range
 *  */
const regex = /./;
console.log(regex.test("a.bc"))