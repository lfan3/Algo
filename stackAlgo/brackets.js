/**
 * stack implementation of bracket track
 */
function matchBrackets(bracket){
    const stack = [];
    const len = bracket.length;

    for(let i=0; i<len; i++){
        const curr = bracket.charAt(i);
        if(curr === "}" || curr === ")" || curr === "]"){   
            //easy to forget
            if(stack.length === 0)
                return false;
            const pop = stack.pop();
            if((curr === '}'&& pop !== '{') || (curr === ')'&& pop !== '(') ||(curr===']' && pop !== '['))
                return false;
        }else{
            stack.push(curr);
        }
    }
    //easy to forget
    if(stack.length > 0)
        return false;
    return true;
}

//todo:make implementation according to the math algo
/**
 * algo of valide brackets
 * 
 * let S be a stack
 * for bracket in bracket_string:
 *  rev = getReversedBracket(bracket)
 * if isLeftBracket(bracket)
 *  S.push(bracket)
 * Else if S.isEmpty() or S.pop() != rev:
 *  return false
 * return S.isEmpty()
 */

const t1 = '{{[()]}}';
const t2 = '{}[]()';
const t3 = '[[[{}]()]';
const t4 = '[{})[]';
const r1 = matchBrackets(t1)
const r2 = matchBrackets(t2)
const r3 = matchBrackets(t3)
const r4 = matchBrackets(t4)
console.log(r1, r2, r3, r4);