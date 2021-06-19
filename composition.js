//if one function's output provide another function as a input then it's call function composition

function print(inp){
    console.log(inp)
}

function multiplyByFive(n) {
    return n * 5
}

function add(a,b){
    return a + b;
}

print(multiplyByFive(add(4,5)))
