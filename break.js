// break keyword
while(true){
    var rand = Math.floor(Math.random()*10)+1;
    if(rand == 9){
        console.log("Winner Winner Chiken Dinner");
        break;
    }else{
        console.log('You Got '+rand);
    }
}