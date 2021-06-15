// array element sumation

// var arr = [1,2,3,4,5,6,34];

// function sumOfArr(arr){
//     var sum = 0;
//     for(var i = 0; i < arr.length; i++){
//         sum +=arr[i];
//     }
//     console.log(sum);
// }

// sumOfArr(arr);

// arguments details 
// without paramitter we can solve a sum of same digit by arguments

// function test(){
//     // console.log(arguments.length);
//     var sum = 0

//     for(var i = 0; i < arguments.length; i++){
//         sum += arguments[i];
//     }
//     console.log(sum);
// }

// test(21,34,43,32)

// return syatem of a function

function info(name,email){
    return {
        name:name,
        email:email
    }
}

var myinfo = info("Ashanur","ashanur@gmail.com");

console.log(myinfo);

