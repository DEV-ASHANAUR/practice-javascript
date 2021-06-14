// array Traversing

var arr = [1,2,3,4,5,6,7,8,9];

for(var i = 0; i < arr.length; i++){
    // console.log(arr[i]);
    arr[i] = arr[i] + 2; // update value
}

console.log(arr);

// sum of arr

var sum = 0;
for(var i = 0; i < arr.length; i++){
    sum += arr[i];
}

console.log(sum);