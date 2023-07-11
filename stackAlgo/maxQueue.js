
var MaxQueue = function() {
  this.maxQueue = [];
  this.queue = [];
};

/**
 * @return {number}
 */
MaxQueue.prototype.max_value = function() {
  const len = this.queue.length;
  return len ? this.maxQueue[len-1]:-1
};

/** 
 * @param {number} value
 * @return {void}
 */
MaxQueue.prototype.push_back = function(value) {
  const len = this.queue.length;
  this.queue.push(value);
  if(!len){
    this.maxQueue.push(value)
  }else{
    const lastMax = this.maxQueue[len-1];
    value > lastMax ? this.maxQueue.push(value) : this.maxQueue.push(lastMax);
  }
};

/**
 * @return {number}
 */
MaxQueue.prototype.pop_front = function() {
  console.log(this.queue, this.maxQueue)
  const len = this.queue.length;
  if(len){
    this.maxQueue.shift();
    return this.queue.shift();
  }else{
    return -1
  }

};

/**
 * Your MaxQueue object will be instantiated and called as such:
 * var obj = new MaxQueue()
 * var param_1 = obj.max_value()
 * obj.push_back(value)
 * var param_3 = obj.pop_front()
 */
var obj = new MaxQueue()
obj.push_back(1)
obj.push_back(2)

var param_1 = obj.max_value()
var param_3 = obj.pop_front()
var param_4 = obj.max_value()

obj.push_back(6)
obj.push_back(5)
var param_5 = obj.max_value()
var param_6 = obj.pop_front()
var param_7 = obj.max_value()
console.log(param_1, param_3, param_4)
