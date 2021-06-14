
var arr = [
    [87,58,62,74,85],
    [58,25,74,96,52],
    [25,45,65,87,98]
];

//manual output
// console.log(arr[0][0]);
// console.log(arr[1][4]);

//array travers by for loop

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        console.log('Elements '+ i +':' + arr[i][j]);
    }
}
