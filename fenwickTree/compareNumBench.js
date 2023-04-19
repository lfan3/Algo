var Benchmark = require('benchmark');

var suite = new Benchmark.Suite;

function geArr(n){
  const arr = []
  for(let i=0; i<n; i++){
    arr.push(i);
  }
  return arr;
}

const arr = geArr(100);

function f1(arr){
  const tmp = [];
  for(let i=0; i<arr.length; i++){
    tmp.push(arr[i]);
  }
}
function f2(arr){
  const tmp = [];
  
  arr.forEach(element => {
   tmp.push(element);
  });
}

suite.add('forLoop', function(){
  f1(arr)
}).add('forEach', function(){
 f2(arr);
}).on('complete', function() {
  console.log('Fastest is ' + this.filter('fastest').map('name'));
})

// run async
.run({ 'async': true });