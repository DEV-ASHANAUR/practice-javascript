var a = "Ashanur";
var b = "Rahman";

var c = a.concat(' ',b);

console.log(c);

// cutting the string

var cut  = a.substr(4,1); // (start,len)

console.log(cut);

// find character by index number

console.log(b.charAt(0));

// check char start with 

console.log(b.startsWith("R"));

// check char start with 
console.log(b.endsWith("n"));

console.log(a.toUpperCase());

console.log(a.toLowerCase());

console.log('    sfsdfs    '.trim());

// convert string to array
console.log(c.split(' '));
