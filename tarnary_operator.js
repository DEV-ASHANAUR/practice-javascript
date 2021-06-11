var n = 10;
var str = '';
if(n % 2 == 0){
    str = 'Even';
}else{
    str = 'Odd';
}

console.log(str);

//tarnary 

str = n % 2 === 0 ? 'Even':'Odd';

console.log(str);