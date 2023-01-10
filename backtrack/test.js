var CQueue = function() {
   this.stack = [];
};

/** 
 * @param {number} value
 * @return {void}
 */
CQueue.prototype.appendTail = function(value) {
    this.stack.push(value);
    return this.stack;
};

/**
 * @return {number}
 */
CQueue.prototype.deleteHead = function() {
    return this.stack.shift() ?? -1;
};

const a = new CQueue();
const s = a.appendTail();
const m = a.deleteHead();
const c = [];
console.log(m)