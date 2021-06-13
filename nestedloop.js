// pattern 1
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// var n = 5

// for(var i = 1; i <= n; i++){
//     var result = '';
//     for(var j = 1; j <= i; j++){
//         result += j + ' '
//     }
//     console.log(result);
// }

//pattern 2
// * * * * *
// * * * * *
// * * * * *
// * * * * *
// * * * * *

// var n = 5;

// for(var i = 1; i <= n; i++){
//     var result = '';
//     for(var j = 1; j <=n; j++){
//         result += '* ';
//     }
//     console.log(result);
// }

//parttern 3

// 1 2 3 4 5 
// 1 2 3 4
// 1 2 3
// 1 2
// 1

// var n = 5;

// for(var i = n; i >= 1; i--){
//     var result = '';
//     for(var j = 1; j <= i; j++){
//         result += j+' ';
//     }
//     console.log(result);
    
// }

// pattern 4 
//         1
//       1 2
//     1 2 3
//   1 2 3 4
// 1 2 3 4 5

// var n = 5;

// for(var i = 1; i <= n; i++){
//     var result ='';
//     for(let j = 1; j <= n-i; j++ ){
//         result += ' ';
//     }
//     for (let j = 1; j <= i; j++ ){
//         result += j;
//     }
//     console.log(result);
// }

// pattern 5
//         1
//        1 2
//       1 2 3
//      1 2 3 4
//     1 2 3 4 5

var n = 10;

for(var i = 1; i <= n; i++){
    var result ='';
    for(let j = 1; j <= n-i; j++ ){
        result += ' ';
    }
    for (let j = 1; j <= i; j++ ){
        result += ' '+j;
    }
    console.log(result);
}

