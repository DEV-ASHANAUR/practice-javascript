// map is simillar to foreach but difference is map can modify a array from existing array but existing array do not change

var arr = [1,2,3]

// var sqrarr = arr.map(function(value){
//     // return Math.floor(Math.random()*10)+1
//     return value*value;
// })

// console.log(arr)
// console.log(sqrarr)

// how to work above the code

function map(arr,cb){
    var newArr = [];
    for(var i = 0; i < arr.length; i++){
        var temp = cb(arr[i],i,arr);
        newArr.push(temp)
    }
    return newArr;
}

var result = map(arr,function(value){
    return value * value * value;
});

console.log(result);

