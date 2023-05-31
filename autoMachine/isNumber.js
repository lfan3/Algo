"use strict";
var State;
(function (State) {
    State[State["STATE_INITIAL"] = 1] = "STATE_INITIAL";
    State[State["STATE_INT_SIGN"] = 2] = "STATE_INT_SIGN";
    State[State["STATE_INTEGER"] = 3] = "STATE_INTEGER";
    State[State["STATE_POINT"] = 4] = "STATE_POINT";
    State[State["STATE_POINT_WITHOUT_INT"] = 5] = "STATE_POINT_WITHOUT_INT";
    State[State["STATE_FRACTION"] = 6] = "STATE_FRACTION";
    State[State["STATE_EXP"] = 7] = "STATE_EXP";
    State[State["STATE_EXP_SIGN"] = 8] = "STATE_EXP_SIGN";
    State[State["STATE_EXP_NUMBER"] = 9] = "STATE_EXP_NUMBER";
    State[State["STATE_END"] = 10] = "STATE_END";
})(State || (State = {}));
var CharType;
(function (CharType) {
    CharType[CharType["CHAR_NUMBER"] = 0] = "CHAR_NUMBER";
    CharType[CharType["CHAR_EXP"] = 1] = "CHAR_EXP";
    CharType[CharType["CHAR_POINT"] = 2] = "CHAR_POINT";
    CharType[CharType["CHAR_SIGN"] = 3] = "CHAR_SIGN";
    CharType[CharType["CHAR_SPACE"] = 4] = "CHAR_SPACE";
    CharType[CharType["CHAR_ILLEGAL"] = 5] = "CHAR_ILLEGAL";
})(CharType || (CharType = {}));
function toCharType(ch) {
    if (ch >= '0' && ch <= '9') {
        return CharType.CHAR_NUMBER;
    }
    else if (ch === 'e' || ch === 'E') {
        return CharType.CHAR_EXP;
    }
    else if (ch === '.') {
        return CharType.CHAR_POINT;
    }
    else if (ch === '+' || ch === '-') {
        return CharType.CHAR_SIGN;
    }
    else if (ch === ' ') {
        return CharType.CHAR_SPACE;
    }
    else {
        return CharType.CHAR_ILLEGAL;
    }
}
const transfer = {
    [State.STATE_INITIAL]: {
        [CharType.CHAR_SPACE]: State.STATE_INITIAL,
        [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
        [CharType.CHAR_SIGN]: State.STATE_INT_SIGN,
        [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
    },
    [State.STATE_INT_SIGN]: {
        [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
        [CharType.CHAR_POINT]: State.STATE_POINT_WITHOUT_INT,
    },
    [State.STATE_INTEGER]: {
        [CharType.CHAR_NUMBER]: State.STATE_INTEGER,
        // [CharType.CHAR_EXP]: State.STATE_EXP_SIGN,
        [CharType.CHAR_EXP]: State.STATE_EXP,
        [CharType.CHAR_POINT]: State.STATE_POINT,
        [CharType.CHAR_SPACE]: State.STATE_END,
    },
    [State.STATE_POINT]: {
        [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
        [CharType.CHAR_SPACE]: State.STATE_END,
        [CharType.CHAR_EXP]: State.STATE_EXP, // not added
    },
    [State.STATE_POINT_WITHOUT_INT]: {
        [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
        // [CharType.CHAR_EXP]: State.STATE_EXP,// shoud not added
    },
    [State.STATE_FRACTION]: {
        [CharType.CHAR_SPACE]: State.STATE_END,
        [CharType.CHAR_NUMBER]: State.STATE_FRACTION,
        [CharType.CHAR_EXP]: State.STATE_EXP,
    },
    [State.STATE_EXP]: {
        [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
        [CharType.CHAR_SIGN]: State.STATE_EXP_SIGN,
    },
    [State.STATE_EXP_SIGN]: {
        [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
    },
    [State.STATE_EXP_NUMBER]: {
        [CharType.CHAR_SPACE]: State.STATE_END,
        [CharType.CHAR_NUMBER]: State.STATE_EXP_NUMBER,
    },
    [State.STATE_END]: {
        [CharType.CHAR_SPACE]: State.STATE_END,
    },
};
function isNumber(number) {
    let state = State.STATE_INITIAL;
    for (let ch of number) {
        const chartype = toCharType(ch);
        state = transfer[state][chartype];
        if (!state) {
            return false;
        }
    }
    return state in [State.STATE_INTEGER, State.STATE_POINT, State.STATE_FRACTION, State.STATE_EXP_NUMBER, State.STATE_END];
}
const m = isNumber(".");
console.log('m', m);
/*
leetcode 剑指offer
确定有限状态自动机
起始的空格
符号位
整数部分
左侧有整数的小数点
左侧无整数的小数点（根据前面的第二条额外规则，需要对左侧有无整数的两种小数点做区分）
小数部分
字符 e\text{e}e
指数部分的符号位
指数部分的整数部分
末尾的空格

作者：力扣官方题解
链接：https://leetcode.cn/problems/biao-shi-shu-zhi-de-zi-fu-chuan-lcof/solutions/372095/biao-shi-shu-zhi-de-zi-fu-chuan-by-leetcode-soluti/
来源：力扣（LeetCode）
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。
*/
