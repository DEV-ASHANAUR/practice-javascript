// forEach callback implementation

var arr = [1,2,3,4,5,6,7]
// var sum = 0;
// arr.forEach(function(value,index,arr){
//     // console.log(value,index,arr)
//     sum += value
// })

// console.log(sum);

// Let's see behind the scene;

//we can hide this function it's work behind
function forEach(arr,cb){
    for(var i = 0; i < arr.length; i++){
        // console.log(arr[i],i,arr);
        cb(arr[i],i,arr);
    }
}
//we can hide this function 


var sum = 0;
forEach(arr,function(value,index,arr){
    // console.log(value,index,arr);
    sum += value
});
console.log(sum);