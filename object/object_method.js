
var obj = {
    a:20,
    b:30,
    c:40
}

// console.log(Object.keys(obj)); // return all keys
// console.log(Object.values(obj)); // return all values

//  console.log(Object.entries(obj)); // return all keys and value as a seprate array

//clone obj 

var obj1 = Object.assign({},obj);

obj1.a = 30

console.log(obj)

console.log(obj1)