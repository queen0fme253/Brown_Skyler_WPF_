//battle Trogdor using math.


var slaying= true;//boolean for slaying Trogdor.
var youHit= Math.floor(Math.random()*2);//varible for striking.
var damageThisRound= Math.floor(Math.random()*5+1);//variable for damage this round.

var totalDamage=0;//added to track damage through simulation.

while(slaying){
    if(youHit){
        console.log("You hit my mighty lizard and did "+damageThisRound+ " damage!");
totalDamage += damageThisRound;
        if(totalDamage >=4) {
            alert("You defeated Trogdor! you owe me a new lizard!");

            slaying = false;

        }else{

        youHit=Math.floor(Math.random()*2);
        }
    }{
    }
}



