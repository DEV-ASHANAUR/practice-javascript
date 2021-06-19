// var arr = [-8,1,2,54,9,-7,0];

// arr.sort(function(a,b){
//     if(a > b){
//         return 1;// assending order
//         // return -1;// desending order
//     }else if(a < b){
//         return -1;// assending order
//         // return 1;// desending order
//     }else{
//         return 0
//     }
// })
// console.log(arr);

// var persion = [
//     {
//         name:'Ashanur',
//         age: 24
//     },
//     {
//         name:'shobuj',
//         age:23
//     },
//     {
//         name:'raju',
//         age:25
//     },
//     {
//         name:'sagor',
//         age:19
//     }
// ]

// persion.sort(function(a,b){
//     if(a.age > b.age){
//         // return 1;// assending order
//         return -1;// desending order
//     }else if(a.age < b.age){
//         // return -1;// assending order
//        return 1;// desending order
//     }else{
//         return 0
//     }
// })

// console.log(persion);

// work with ever method

var arr = [1,23,47,52,5,-58]
// check every arr elemnet even or not
// if all element is even than return true otherwise return false
// var result = arr.every(function(val){
//     return val % 2 == 0;
// })

// check every arr elemnet possitive or not
// if all element is positive than return true otherwise return false
// var result = arr.every(function(val){
//     return val > 0;
// })

// console.log(result);

// work with some method
//check if minimum 1 value is negetive or not
var result1 = arr.some(function(val){
    return val > 0;
})


console.log(result1);

