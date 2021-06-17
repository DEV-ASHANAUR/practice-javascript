function sample(a,b, bc){
    var c = a + b;
    var d = a - b;

    var result = bc(c,d)
    return result;
}

 function sum(a, b){
    return a + b;
 }
 // use for sum
 var result = sample(8,8,sum);

 console.log(result);

 // use for sub
 var result1 = sample(8,8,function(a,b){
    return a - b;
 });

 console.log(result1);