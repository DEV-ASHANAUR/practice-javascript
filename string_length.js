var str = 'hello';

//simple way for retrive string length
console.log(str.length);
var lenght = 0;

while(true){
    if(str.charAt(lenght) == ''){
        break;
    }else{
        lenght++;
    }
}

console.log(lenght);