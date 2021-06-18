var arr = [1,2,3,4,5,6,7,8]
// if value is available then return value
// var result = arr.find(function(value){
//     return value == 5
// })

// console.log(result);

// if value is available than return index number
// var result1 = arr.findIndex(function(value){
//     return value == 5
// });
// console.log(result1);

// lets implement this 

// find and findIndex 

function Myfind(arr,cb){
    for(var i = 0; i < arr.length; i++){
        if(cb(arr[i])){
            // return arr[i] // return value
            return i // return value

        }
    }
}

var result3 = Myfind(arr,function(value){
    return value == 5
});

console.log(result3);
