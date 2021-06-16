// Higher Order Function

function add(a, b){
    return a+b;
}

function manipulation(a,b, func){
    var c = a + b;
    var d = a - b;

    function multiply(){
        var m = func(a,b)
        return c*d*m
    }
    return multiply
}

var multiply = manipulation(3,4,add)
console.log(multiply());