// Recursive function

// function sayHi(n) {
//     if(n == 0){
//         return
//     }
//     console.log('hello World');
//     sayHi(n-1)
// }

// sayHi(10);

// function sum(n){
//     if(n == 1){
//         return 1
//     }
//     return n + sum(n-1)
// }

// console.log(sum(5));

// factorial

// function fact(n) {
//     if(n == 1){
//         return 1
//     }
//     return n * fact(n-1)
// }

// console.log(fact(4));

// sum of array by recursive function
var arr = [1,2,3,4,5]
function sumOfArray(arr,lastindex) {
    if(lastindex < 0){
        return 0;
    }
    return arr[lastindex] + sumOfArray(arr, lastindex -1);
}

console.log(sumOfArray(arr,arr.length -1));