// object compare

var obj1 = {
    a:10,
    b:20
}

var obj2 = {
    a:10,
    b:20
}

// console.log(obj1 == obj2); // return false because it check memory location

// we can check object below way
// if(obj1.a == obj2.a && obj1.b == obj2.b){
//     console.log(true);
// }

//another tricks

console.log(JSON.stringify(obj1) == JSON.stringify(obj2)); // it's working



