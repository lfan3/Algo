/**
 * @param {string} s
 * @return {boolean}
 * state machine. there is a state and a formule de transformation.
 */

const STATES = {
    ST_INIT: 'ST_INIT',
    NUM_INTEGER:'NUM_INTEGER', //OK
    NUM_SIGN:'NUM_SIGN', 
    ST_POINT:'ST_POINT', //OK ?
    ST_POINT_WITHOUT_INTERGER: 'ST_POINT_WITHOUT_INTERGER', //FORGET...
    FRACTION: 'FRACTION', //OK
    EXPO: 'EXPO',
    EXPO_SIGN: 'EXPO_SIGN',
    EXPO_NUM: 'EXPO_NUM', //OK
    ST_FINAL: 'ST_FINAL' //OK
}

const VALIDE_FINAL_STATES = [STATES.NUM_INTEGER, STATES.FRACTION, STATES.EXPO_NUM, STATES.ST_FINAL, STATES.ST_POINT];

const CHARTYPE = {
    NUMBER :  'NUMBER',
    SIGN : 'SIGN',
    SPACE : 'SPACE',
    EXPO : 'EXPO',
    POINT : 'POINT',
    ILLEGAL : 'ILLEGAL',
}

const TRANSFORM =  {
    [STATES.ST_INIT]:{
        NUMBER:  STATES.NUM_INTEGER,
        SIGN: STATES.NUM_SIGN,
        SPACE:  STATES.ST_INIT,
        POINT:  STATES.ST_POINT_WITHOUT_INTERGER, 
    },
    [STATES.NUM_INTEGER]:{
        NUMBER: STATES.NUM_INTEGER,
        SPACE: STATES.ST_FINAL,
        EXPO: STATES.EXPO,
        POINT: STATES.ST_POINT,
    },
    [STATES.NUM_SIGN]:{
        NUMBER: STATES.NUM_INTEGER, //mistaken
        POINT:  STATES.ST_POINT_WITHOUT_INTERGER //mistaken STATES.ST_POINT,
    },
    [STATES.ST_POINT]:{
        NUMBER: STATES.FRACTION,
        SPACE: STATES.ST_FINAL,
        EXPO: STATES.EXPO,
    },
    [STATES.ST_POINT_WITHOUT_INTERGER]:{
        NUMBER:STATES.FRACTION, //.E IS FALSE
    },
    [STATES.FRACTION]:{
        NUMBER: STATES.FRACTION,
        SPACE: STATES.ST_FINAL,
        EXPO: STATES.EXPO,
    },
    [STATES.EXPO]:{
        NUMBER: STATES.EXPO_NUM,
        SIGN: STATES.EXPO_SIGN,
    },
    [STATES.EXPO_SIGN]:{
        NUMBER: STATES.EXPO_NUM
    },
    [STATES.EXPO_NUM]:{
        SPACE: STATES.ST_FINAL,
        NUMBER: STATES.EXPO_NUM, //FORGET
    },
    [STATES.ST_FINAL]:{
        SPACE: STATES.ST_FINAL,
    } //FORGET

}

const getCharType = (ch)=>{
    if(ch === "+" || ch === '-'){
        return CHARTYPE.SIGN;
    }else if(ch >= "0" && ch <= '9'){ //wrong  with +ch >= 0, when ch === " " , +ch == 0
        return CHARTYPE.NUMBER;
    }else if(ch === 'e' || ch === "E"){
        return CHARTYPE.EXPO;
    }else if(ch === ' '){
        return CHARTYPE.SPACE;
    }else if(ch ==='.'){
        return CHARTYPE.POINT;
    }else{
        return CHARTYPE.ILLEGAL;
    }
}


var isNumber = function(s) {
    let state = STATES.ST_INIT;
    for(let ch of s){
        const charType = getCharType(ch);
        if(charType === CHARTYPE.ILLEGAL){
            return false;
        }
        state = TRANSFORM[state][charType];
    console.log(state, charType)

        if(!state){
            return false;
        }
    }
    return VALIDE_FINAL_STATES.includes(state);
};

/*
 the value in the case are not boolean, but the listed value, the following way is wrong!
 switch (ch){
        case ch === '+' || ch === '-':
            return CHARTYPE.SIGN;
        case (+ch >= 0 && +ch <= 9):{
            console.log("ch", ch);
            return CHARTYPE.NUMBER;
        }
        case ch === "e" || ch === "E":
            return CHARTYPE.EXPO;
        case ch === " ":
            return CHARTYPE.SPACE;
        case ch === ".":
            return CHARTYPE.POINT;
        default:{
            return CHARTYPE.ILLEGAL;
        }
    }
*/

const n = ["+100", "5e2", "-123", "3.1416", "-1E-16", "0123", "-1E-16", "-1."];
const m = ["12e", "1a3.14", "1.2.3", "+-5", "12e+5.4"]

// for(let e of m){
    // console.log(isNumber(e))
// }
console.log(isNumber("-1."))
