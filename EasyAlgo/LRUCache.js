var LRUCache = function(capacity) {
    // track the last used item
    this.queue = [];
    this.cache = new Map();
    this.capacity = capacity;
    // const capacity = capacity;
    this.update = (key) => {
        let index = this.queue.indexOf(key);
        if(index !== -1){
            this.queue.splice(index, 1);
            this.queue.push(key);
        }else{
            this.queue.push(key);
        }
    }
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    this.update(key);
    return this.cache.get(key);
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    const len = this.cache.size;
    this.update(key);
    
    if(!this.cache.get(key)){
        if(len <= this.capacity){
            this.cache.set(key, value);
        }
        console.log(len, this.capacity)
    }
};

const l = new LRUCache(2);
l.put(1,1)
l.put(2,2)
l.get(1)
l.put(3,3)

console.log(l);