
//sum of first ten numbers

// var sum =  0;
// for (let i = 0; i <= 10; i++) {
//     console.log(i +'+'+ sum +'='+ (sum + i) );
//     sum +=i;
// }

// console.log('result is = '+sum); 

// sum of 1 to 100 even number

var sum = 0;

for(let i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i +'+'+ sum +'='+ (sum + i));
        sum+=i;
    }
}
console.log('result = '+sum);