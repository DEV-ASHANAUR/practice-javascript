// if condition

// var a = 10;
// var b = 20;

// if(a > b){
//     console.log('a is greater then b');
// }
// if(a < b){
//     console.log('a is less then b');
// }

// var n = 50;

// // check n is even or odd
// if(n % 2 == 0){
//     console.log(n+' is even number');
// }

// if(n % 2 == 1){
//     console.log(n+' is Odd number');
// }

// if-else condition 

// var a = 10;
// var b = 20;
//  if(a > b){
//      console.log('a is greater then b');
//  }else{
//      console.log('a is less then b');
//  }

//  var n = 50;
//  // check odd or even
//  if(n % 2 === 0){
//      console.log(n+ ' is a even number');
//  }else{
//      console.log(n+ ' is a odd number');
//  }

 //else-if

// if(n === 0){
//     console.log('n is zero');
// }else if(n % 2 === 0){
//     console.log(n+ ' is a even number');
// }else{
//     console.log(n+ ' is a odd number');
// }

//switch statement

var date = new Date();

var today = date.getDay();
// sunday - 0 , monday - 2
// console.log(today);

switch(today){
    case 0:
        console.log('Today is sunday');
        break;
    case 1:
        console.log('Today is monday');
        break;
    case 2:
        console.log('Today is Tuesday');
        break;
    case 3:
        console.log('Today is Wednesday');
        break;
    case 4:
        console.log('Today is Thuesday');
        break;
    case 5:
        console.log('Today is Friday');
        break;
    case 6:   
        console.log('Today is Saturday');
        break;
    default:
        console.log("invalid Number"); 
        break;                    
}


