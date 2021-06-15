// object traversing

var obj = {
    a:10,
    b:30,
    c:40
}

// console.log('a' in obj ); //return true

for(var i in obj){
    console.log(i);
    console.log(i + ':' + obj[i])
}
