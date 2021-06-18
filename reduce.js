
var arr = [1,2,3,4,5,6,7,8]

var result = arr.reduce(function(prev,current){
    return prev + current;
},100);

var max = arr.reduce(function(prev,current){
    return Math.max(prev,current)
},0)
console.log(max);
console.log(result);