/**
 * only add open parenthesis if open < n
 * only add close parenthesis if close < open
 * if close == open done
 */
function generateParenthesis(n) {
    const stack = [];
    const res = [];
    const res1 = [];
    const backtrack = (closeN, openN) => {
        if(closeN === openN && openN === n && closeN === n) {
            const str = stack.join("");
            res.push(str);
            return;
        }
        if(openN < n) {
            stack.push('(');
            backtrack(closeN, openN+1);
            stack.pop();
        }
        if(closeN < openN) {
            stack.push(')');
            backtrack(closeN+1, openN);
            stack.pop();
        }
    }
    backtrack(0,0);
    return res1;
}

const r = generateParenthesis(2);
console.log(r);

