// sum by currying

function currying(a){
    return function(b) {
        return function(c){
            return a + b + c;
        }
    }
}

var result = currying(5)(4)(1);

console.log(result);