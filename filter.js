// array filter


var arr = [1,2,3,4,5,56,7,8]

// filteredArr = arr.filter(function(val){
//     // return val % 2 == 0; // return even number
//      return val % 2 == 1; // return odd number

// });

// console.log(filteredArr);

// let's see

function myFilter(arr,cb){
    var newArr = []
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i],i,arr)){
            newArr.push(arr[i]) 
        }
    }
    return newArr;
}

console.log(myFilter(arr,function(value){
    return value > 4
}));

console.log(myFilter(arr,function(value){
    return value % 2 == 0
}));