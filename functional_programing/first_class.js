// First Class Function 

function add(a,b){
 return a+b
}

// 1. A function can be stored in a Variable

var sum = add
console.log(sum(4,5))

//2. A Function Can be Stored In a Array

var arr = []
arr.push(add)
// console.log(arr)
console.log(arr[0](4,6))

//3. A function can be stored in a object

var obj = {
    sum:add
}

// console.log(obj)
console.log(obj.sum(7,8))

// 4. we can create function as need

setTimeout(function(){
    console.log("I Have created..")
});

// higher function

// 5. we can pass function as an arguments

// 6. we can return function from another function