// var i = 0;

// while(i < 10){
//     console.log(i+' Md Ashanur Rahman');
//     i++;
// }
 
// rules of create first 1 - 10 random number 

// var rand = Math.floor(Math.random()*10) + 1;

// console.log(rand);

// let's have a fun

var running = true;

while(running){
    var rand = Math.floor(Math.random()*10)+1;
    if(rand == 5){
        running = false;
        console.log("Winner Winner Chiken Dinner");
    }else{
        console.log('You Got '+ rand);
    }
}