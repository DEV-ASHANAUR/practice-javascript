var s1 = '1000';
var n = 10;
console.log(s1*n); //it's work because of auto type conversion
console.log(s1+n); //it's not working 
var num = Number.parseInt(s1);
console.log(num+n); //it's working by type conversion
console.log(String(Infinity));

//falsy value // it's all time return false

// '',
// 0,
// null,
// undefined
// Nan

console.log(Boolean('')) // it's return false
console.log(Boolean('sfdsgd')) // it's return true
console.log(Boolean(null)) // it's return false
console.log(Boolean(undefined)) // it's return false
console.log(Boolean(NaN)) // it's return false
console.log(Boolean(0)) // it's return false
console.log(Boolean(-4)) // it's return true

var x = true
console.log(x.toString())

//constract 
// String, Boolean ,Number 
