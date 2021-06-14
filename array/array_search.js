// array search
var arr = [1,2,3,4,56,87,45];

var found = 4;
var isFound = false;

for(var i = 0; i < arr.length; i++){
    if(arr[i] == found){
        console.log('Data found at Index '+ i);
        isFound = true;
        break;
    }
}

if(!isFound){
    console.log('Data Not Found');
}